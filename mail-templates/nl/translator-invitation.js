'use strict';

module.exports = {
  subject(params) {
    return `translator invitation`;
  },
  body(params) {
    return `<div>
				    <h1>Welcome ${params.firstName},</h1>
				    <p>We're very happy to have you.</p>
				    <p>Best, OpenEmbassy</p>
				</div>`;
  }
};
