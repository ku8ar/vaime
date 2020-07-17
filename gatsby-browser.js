// export const onServiceWorkerUpdateReady = () => window.location.reload(true)

exports.onClientEntry = function(_, pluginParams) {
  if (process.env.NODE_ENV === 'development') return
  require.ensure(['@sentry/browser'], function(require) {
    const Sentry = require('@sentry/browser')
    Sentry.init({dsn: "https://bf0faff42d3d4f6cb6481b6e76e1c4c4@o417832.ingest.sentry.io/5319440"})
  })
}
