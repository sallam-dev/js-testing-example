# JS Testing Example

This repository serves as an exercise to introduce testing with JavaScript.

## The Exercise

The exercise is to write and test a single function that accepts `username` and a `password` and save them to a `json` file **asynchronously**

### Function signature

The function should accept a `userRegistrationObject` in following form

```js
let userRegistrationObject = {
    username: 'string',
    password: 'string',
};
```

And return a promise that resolves to a `Boolean` or rejects with an `Error`

### Processing Rules

- Username and Password are required
- Password is minimum length should be 7 characters
- Username should be saved under `/tmp/{username}.json`
- Password should be hashed with SHA-256
- Username should trimmed and case-insensitive

### Rejections

The function should reject in the following cases

- Username is empty after trimming
- Password is empty
- Password characters are less than 7 characters

## Useful Resources

[Write files in Node.js](https://nodejs.org/api/fs.html#fs_fs_writefile_file_data_options_callback)
[Read files in Node.js](https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback)
[Check a file exists in Node.js](https://nodejs.org/api/fs.html#fs_fs_access_path_mode_callback)
[Hashing Password using Node's crypto module](https://nodejs.org/api/crypto.html#crypto_crypto_createhash_algorithm_options)
[Promisifying Node.js callbacks](https://nodejs.org/dist/latest-v8.x/docs/api/util.html#util_util_promisify_original)
