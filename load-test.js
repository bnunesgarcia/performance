import http from 'k6/http';
import { check, sleep } from 'k6';
import { Rate } from 'k6/metrics';

export let errorRate = new Rate('errors');

export let options = {
    stages: [
        { duration: '1m', target: 100 }, 
        { duration: '1m', target: 200 },
        { duration: '1m', target: 300 },
        { duration: '1m', target: 400 }, 
        { duration: '1m', target: 500 }, 
        { duration: '1m', target: 0 }, 
    ],
    thresholds: {
        errors: ['rate<0.1'], 
        'http_req_duration': ['p(95)<500'], 
    },
};

export default function () {
    let maxRetries = 5;
    let url = 'https://reqres.in/api/users';
    let params = { timeout: '60s' };
    
    for (let i = 0; i < maxRetries; i++) {
        let response = http.get(url, params);
        if (check(response, { 'status was 200': (r) => r.status === 200 })) {
            break;
        } else if (i === maxRetries - 1) {
            errorRate.add(1);
        }
        sleep(Math.pow(2, i));
    }

    sleep(1);
}
