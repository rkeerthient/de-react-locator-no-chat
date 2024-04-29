# Instructions

### Cloning and Configuration

- Clone the repo to your local machine.
- **Run the command `rm -rf .git` in your terminal to disconnect the local repository from my repo.**
- Create a new site entity in your account with two fields:
  - header
  - hooter
- In your account create a new entity and upload the header image to header field and footer image to footer field and save it. Copy the newly created entity ID.
- In the repo, open the `config.yaml` file and replace `entityId` value with this ID. It should be in last line.
- Push the package to GitHub.
![Yaml Config](/docImages/yamlconfig.png)
### Deploying Pages

- Log in to your account and click on "Pages" in the top right corner.
- Click on "Add new site" and select "Use my GitHub account" as the deployment method.
- Authenticate if prompted.
- Follow the instructions:
  - Site Name: Enter a name for your site.
  - Account: Select your account from the dropdown.
  - Repository: Enter the name of your uploaded repository.
  - Production Branch: Select the branch where you've committed your code (default is "main" or "master").
  ![Yaml Config](/docImages/pages.png)
- Click +Add a site Environment Variable and add the following mandatory keys:
  - YEXT_PUBLIC_API_KEY: Your Search API key
  - YEXT_PUBLIC_EXP_KEY: Your search Experience Key
  - YEXT_PUBLIC_MAP_API_KEY: (Will be shared in chat)
  - YEXT_PUBLIC_STATICMAP_API_KEY: (Will be shared in chat)
  - YEXT_PUBLIC_ACCOUNTTYPE: PROD (if production) or SBX (if not production)
  ![Yaml Config](/docImages/search.png)
- Click "Deploy Site" to complete the deployment.
