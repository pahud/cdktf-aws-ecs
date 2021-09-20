const { ConstructLibraryCdktf, DependenciesUpgradeMechanism, NpmAccess } = require('projen');

const AUTOMATION_TOKEN = 'PROJEN_GITHUB_TOKEN';

const project = new ConstructLibraryCdktf({
  author: 'Pahud Hsieh',
  authorAddress: 'pahudnet@gmail.com',
  cdktfVersion: '0.6.2',
  defaultReleaseBranch: 'main',
  name: '@pahud/cdktf-aws-ecs',
  description: 'CDKTF construct library for Amazon ECS',
  repositoryUrl: 'https://github.com/pahud/cdktf-aws-ecs',
  deps: [
    '@cdktf/provider-aws',
  ],
  peerDeps: [
    '@cdktf/provider-aws',
  ],
  depsUpgrade: DependenciesUpgradeMechanism.githubWorkflow({
    ignoreProjen: false,
    workflowOptions: {
      labels: ['auto-approve', 'auto-merge'],
      secret: AUTOMATION_TOKEN,
    },
  }),
  autoApproveOptions: {
    secret: 'GITHUB_TOKEN',
    allowedUsernames: ['pahud'],
  },
  workflowBootstrapSteps: [
    {
      name: 'Install Terraform',
      id: 'install_terraform_cli',
      run: 'curl -o terraform.zip https://releases.hashicorp.com/terraform/1.0.6/terraform_1.0.6_linux_amd64.zip && unzip terraform.zip && mv terraform /usr/local/bin/ && rm -f terraform.zip',
    },
  ],
  npmAccess: NpmAccess.PUBLIC,
  publishToPypi: {
    distName: 'pahud-cdktf-aws-ecs',
    module: 'pahud_cdktf_aws_ecs',
  },
});

const common_exclude = ['cdktf.out', 'yarn-error.log', 'dependabot.yml', '.terraform', 'terraform.*'];
project.npmignore.exclude(...common_exclude, 'images', 'docs', 'website');
project.gitignore.exclude(...common_exclude);

project.synth();
