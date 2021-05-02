# Github Action Get Release URL
A github action to get the release URL

## Action Input

| key      | Required  |  Default | Description     |
| -------- |:---------:| :------: | ---------------:|
| user     | `true`    |  `null`  | Github Username |
| repo     | `true`    |  `null`  | Repository Name |
| tag      | `true`    |  `null`  | Tag Release     |
| index    | `false`   |  `0`     | File Index      |

## How to use

```yaml
   - name: Get Release URL
     id: get_release_url
     uses: subekti404dev/github-action-get-release-url@main
     with:
      user: copas12
      repo: build-luna-mobile-action
      tag: phone_2021-05-02_04.06


   - name: Print URL
     run: echo ${{ steps.get_release_url.outputs.result }}
```