[![build-test](https://github.com/duskmoon314/action-load-env/actions/workflows/test.yml/badge.svg)](https://github.com/duskmoon314/action-load-env/actions/workflows/test.yml)

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
