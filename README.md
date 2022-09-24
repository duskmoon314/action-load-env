<p align="center">
  <a href="https://github.com/actions/typescript-action/actions"><img alt="typescript-action status" src="https://github.com/actions/typescript-action/workflows/build-test/badge.svg"></a>
</p>

# Action Load Env

This action loads environment variables from files

## Usage

```yaml
steps:
  - uses: duskmoon314/action-load-env@v1
    id: load-env
    with:
      files: |
        .env.test
        .env.dev.*
  # do anything you want with the env or outputs
  - run: echo ${{ steps.load-env.outputs.Answer }}
```