const { ConstructLibraryCdktf, DependenciesUpgradeMechanism, NpmAccess } = require('projen');

const AUTOMATION_TOKEN = 'PROJEN_GITHUB_TOKEN';

const project = new ConstructLibraryCdktf({
  author: 'Pahud Hsieh',
  authorAddress: 'pahudnet@gmail.com',
  cdktfVersion: '0.5.0',
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
  minNodeVersion: '12.20.0',
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
  npmAccess: NpmAccess.PUBLIC,
  publishToPypi: {
    distName: 'pahud-cdktf-aws-eks',
    module: 'pahud_cdktf_aws_eks',
  },
});

const common_exclude = ['cdktf.out', 'yarn-error.log', 'dependabot.yml', '.terraform', 'terraform.*'];
project.npmignore.exclude(...common_exclude, 'images', 'docs', 'website');
project.gitignore.exclude(...common_exclude);

project.synth();
