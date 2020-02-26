# stryker-swagger-router-issue

# Problem

- In the mutation report, all mutants in the controller file mapped to endpoints by the swagger-node-runner package are marked as *survived*, although they're tested.
- For other code, mutation analysis works as expected.

# Steps

- Clone repo.
- Run `npm install`.
- Run `npx stryker run`.
- Check report at `reports/mutation/html`.
