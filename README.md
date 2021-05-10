Testing Code

- Use if possible Puppet, Ansible or Terraform to setup the server
- Dockerize this node/expressjs application
- Setup an nginx domain to make this REST API available (ngrok can be used)
- Track errors from output to any 3rd party service (if possible)
- Alert if server is gone (any APM service can be used)
- Before run deployments, consider to execute tests
- Let's change something in the code and create a PR to master branch, the autodeploy should be triggered in order to have a fresh copy running again.