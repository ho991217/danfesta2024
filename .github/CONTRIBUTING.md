# 👀 DANFESTA 컨트리뷰션 가이드

누구나 자유롭게 단페스타에 기여할 수 있습니다.


> Every contributor to Slash libraries should adhere to our Code of Conduct.
> Please read the full text to understand what actions will and will not be tolerated.

## 1. Issues

You can contribute to Slash libraries via:

Improving our docs
Reporting a bug in our issues tab
Requesting a new feature or package
Having a look at our issue list to see what's to be fixed

## 2. Pull Requests

> Opening a pull request

You can raise your own PR. The title of your PR should match the following format:

```plaintext
<type>[package scope]: <description>
```

We do not care about the number, or style of commits in your history, because we squash merge every PR into main.
Feel free to commit in whatever style you feel comfortable with.

#### 2.1 Type

**Type must be one of those**

if you changed shipped code :

- feat - for any new functionality additions
- fix - for any fixes that don't add new functionality

if you haven't changed shipped code :

- docs - if you only change documentation
- test - if you only change tests

other :

- chore - anything else

#### 2.2 Package Scope

The name of package that you made changes. (ex: react, use-overlay, ky)
If you made changes across multiple packages, writing package scope is optional.

#### 2.3 Description

A clear and concise description of what the pr is about.
