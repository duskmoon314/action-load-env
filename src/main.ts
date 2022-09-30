import * as core from '@actions/core'
import * as glob from '@actions/glob'
import {readFile} from 'fs/promises'
import dotenv from 'dotenv'

export const parse = async (files: string): Promise<object> => {
  const globber = await glob.create(files)
  let result = {}
  for await (const file of globber.globGenerator()) {
    core.debug(`Loading ${file}`)
    const content = await readFile(file)
    result = {...result, ...dotenv.parse(content)}
  }
  return result
}

const set_env_output = (env: object): void => {
  for (const [key, value] of Object.entries(env)) {
    core.info(`Setting ${key}=${value}`)
    if (core.getBooleanInput('env')) {
      core.exportVariable(key, value)
    }
    if (core.getBooleanInput('output')) {
      core.setOutput(key, value)
    }
  }
}

async function run(): Promise<void> {
  try {
    const files: string = core.getInput('files')
    const env_obj = await parse(files)
    set_env_output(env_obj)
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
