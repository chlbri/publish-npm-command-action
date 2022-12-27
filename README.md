<p align="center">
  <a href="https://github.com/actions/typescript-action/actions"><img alt="typescript-action status" src="https://github.com/actions/typescript-action/workflows/build-test/badge.svg"></a>
</p>

# Generates a npm command and change package version

For commit publishing. 
It looks at your commit, change your package version with the start of your commit subject ("major", "minor", "patch").
Also the action generates a npm publish command for beta an aplha version. Also at the beginning of your last commit, if you write "beta" or "alpha",
it will generate "npm publish --access public --{beta/alpha}".

NB: Don't forget to configure your CI environment with actions/setup according to your will.

<br/>

## Input Parameters

You can set any or all of the following input parameters :

|Name                  |Type     |Default                     |Description                                             |
|----------------------|-------- |----------------------------|--------------------------------------------------------|
|`path`                |string   |optional                    |The package.json file path. (absolute). Use process.cwd |

<br/>

## Output Variables

npm-publish-command exposes the generated command and the version created.

```yaml
steps:
  - id: publish
    uses: bemedev/npm-publish-command@v0.0.1
    with:
      path: ./package.test.json

  - Show version
    run: |
      echo "Version changed: ${{ steps.publish.outputs.version }}"
      
  - Show command
    run: |
      echo "The generated npm command: ${{ steps.publish.outputs.command }}"
```

<br/>

| Variable      | Type    | Description                                                        |
----------------|---------|------------------------------------------------------------------- |
| `command`     | string  | The command to excute                                              |
| `version`     | string  | The version of the package                                         |                                                                                               
