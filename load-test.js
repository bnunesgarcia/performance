import http from 'k6/http';
import { check, sleep } from 'k6';
import { Rate } from 'k6/metrics';

export let errorRate = new Rate('errors');

export let options = {
    stages: [
        { duration: '1m', target: 500 }, 
        { duration: '1m', target: 500 }, 
        { duration: '1m', target: 0 }, 
    ],
    thresholds: {
        errors: ['rate<0.1'], 
        'http_req_duration': ['p(85)<500'], 
    },
};

export default function () {
    // api publica
    let response = http.get('https://reqres.in/'); 
    check(response, {
        'status was 200': (r) => r.status === 200,
    }) || errorRate.add(1);

    sleep(1);
}
