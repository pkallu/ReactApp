import * as Sentry from "@sentry/browser";

function init() {
  Sentry.init({
    dsn: "https://b90741ad6e1340cd9ed473d00ad7dc4e@sentry.io/1478974"
  });
}

function log(error) {
  Sentry.captureException(error);
}

export default {
  init,
  log
};
