import * as Sentry from '@sentry/nextjs';

Sentry.init({
   dsn: 'https://da6735d032e7a729715cc6453614108e@o4506947222700032.ingest.us.sentry.io/4506947223945216',
   tracesSampleRate: 1,
   debug: false,
   replaysOnErrorSampleRate: 1.0,
   replaysSessionSampleRate: 0.1,
   integrations: [
      Sentry.replayIntegration({
         maskAllText: true,
         blockAllMedia: true,
      }),
   ],
});
