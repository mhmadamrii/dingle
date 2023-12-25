'use server';

import axios from 'axios';

export async function callHello() {
  try {
    const res = axios.get('/api/hello');
    console.log('new response', res);
  } catch (error) {
    console.log('error', error);
  }
}
