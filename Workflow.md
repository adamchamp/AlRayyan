# Project Workflow
With a medium/large project such as ListLNK, it's important to make sure that one person's edits do not overwrite someone else's. To ensure that this doesn't happen, we must follow these steps when working on tasks.

1. Claim the task on Trello (or any project/task management app). Make sure everyone is aware of what you're working on during our weekly meetings.
2. Write step-by-step instructions on how you believe you should complete this task. Discuss with the team if necessary.
3. Synchronize the `main` branch. Make sure you pull any recent commits from GitHub (or any Source Control app).
4. Create a new branch, based on `main`. Name it an appropriate name based on your task. Use all lowercase words, separated by hyphens.
5. Complete each individual sub-task in a separate commit with descriptive messages.
    > **Example:** Task: Create a new page to display each database collection to the admin role to allow for viewing and editing. You may organize your commits as follows:
    >  | Commit Message |
    >  | -------------- |
    >  | Created a page for viewing Collection 1 |
    >  | Created a page for editing Collection 1 |
6. When you have completed your task and adequately tested that it works correctly, move on to the next step.
7. Merge the `main` branch back into your branch by running the following command:
    ```
    git merge origin/main
    ```
    Note: If other people are working on the same files as you simultaneously, run the following command instead:
    ```
    git rebase origin/main
    ```
8. Resolve any merge conflicts if any arise.
9. Create a Pull Request (PR) on GitHub. (use the template provided below)
    > Ensure that your PR includes a summary of exactly what you did in this task. Refer to the "Files Changed" and "Commits" tabs on GitHub to remember the details. **If you made any UI changes, make sure to include 'Before' and 'After' screenshots.**

<em>Please use the following PR Template:</em>

```
## Description

<!-- Describe what this code changes and why you chose this approach. -->

## Related Issue

<!-- List task(s) [issue number from the task tracking system "Trello Board"](issue url) -->

## Updates

### Before

<!-- If UI feature, take and provide screenshots and short descriptions -->

### After

<!-- If UI feature, take and provide screenshots and short descriptions -->

## Testing Steps / QA Criteria

<!-- Provide steps team members and reviewers need to follow to properly test your additions.

For example:
1. Checkout the branch branch_name, run meteor
2. Log into the app and ...
3. Open the inspector and click this button.
4. You will see ....
etc.
-->
```