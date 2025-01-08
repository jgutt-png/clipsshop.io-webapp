'use client';

import { Amplify } from 'aws-amplify';
import { Auth } from '@aws-amplify/auth';

const config = {
  Auth: {
    region: 'us-east-2',
    userPoolId: 'us-east-2_jgm5ByvwP',
    userPoolWebClientId: '57a8q9s71huqumcdkjsefg0kq4',
    mandatorySignIn: false,
    authenticationFlowType: 'USER_SRP_AUTH',
  },
};

export function configureAmplify() {
  if (typeof window !== 'undefined') {
    try {
      Amplify.configure(config);
      Auth.configure(config);
    } catch (error) {
      console.error('Error configuring Amplify:', error);
    }
  }
}
