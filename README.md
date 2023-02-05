<p align="center">
</p>

# FitAi (Stay Fit with Artificial Intelligence)
# Built for HackThisFall

## To check deployment, visit this link 👉 [FitAi](https://www.fitai.vercel.app/)

- [About Project](#About-Project)
FitAi is a virtual personal trainer that generates personalized exercise and diet plans for its users. The app tracks the user's progress daily, ensuring that they are on track to reach their fitness goals. The app uses AI algorithms to suggest workouts based on the user's current fitness level and progress, ensuring that their exercise regimen is challenging but achievable.

- [Technologies Used](#tech)
FitAi was developed using a combination of technologies, including OpenAI API, Next.js13, Alan AI, TypeScript, Material UI, Tailwind, Appwrite, Docker, and DigitalOcean Droplet. 

- [Working](#Working)
  - [Landing Page](#Landing-Page)
  - [Login](#Login)
  - [Diet plan](#Plan-Selection)
  - [Exercise plan](#Plan-Selection)


- [Getting Started](#Getting-Started)

  
<a id="About-Project"></a>

# About FitAi

- FitAi is a web-based fitness application that helps users to stay fit with the help of Artificial Intelligence.

- The goal of this project is to provide a personalized workout plan for each user based on their fitness goals and body type.

<a id="tech"></a>

# Technologies Used

- To create the Frontend, we used next.js & typescript, along with Tailwind CSS for styling.

- For the Backend, we used the services of Appwrite for authentication of the users. The AI algorithms are implemented using Python and TensorFlow.

<a id="Working"></a>

# How it Works
- The user is introduced to the landing page as soon as he/she opens the website, where we highlight our motive and provide a brief overview of the app.

- To get started, the user must log in/sign up. Once logged in, the user will be asked to select a plan based on their fitness goals (mass gain, fit, weight loss).

- Based on the selected plan, the AI algorithms will provide a personalized workout plan for the user, including the number of sets, reps, and exercises to be performed.

- The user can access their workout plan at any time and track their progress.

# Features and Interfaces




## Installation

> This project is built on nextJS 13 experimental version

1. Fork the repo into your account

![Fork Image](https://i.imgur.com/mNw6zxu.png)

2. Clone the project into your local machine

```sh
git clone https://github.com/<Your-name>/fitAI.git
```

3. Navigate the folder

```sh
cd fitAI
```

3. Install the dependencies

```sh
npm install
```
4. Make .env file in root directory with these variables

```sh
OPEN_API_KEY= 'YOUR OPENAI API KEY GOES HERE'
```
- Get your openAi api key here: [OPENAI API](https://openai.com/api/)

5. Run the project on local machine

```sh
npm run dev
```
6. Every time you start making changes to your forked repo make sure it's in sync with the original repo

## Contributing Guidelines

Thank you for considering to contribute to this project.

### What do I need to know to contribute?

This project is in a very early stage so anybody who's familiar with **ReactJS**/**NextJS**/**Typescript**/**TailwindCSS** can contribute. If you don't feel ready to make a contribution yet, no problem at all. You can also contribute to this `ReadMe` section or the **Documentation** part of our project.

If you are interested to contribute and want to learn more about the technologies that are used in this project, checkout the links below.

- [ReactJS Official Docs](https://reactjs.org/docs/getting-started.html)
- [NextJS Documentation](https://beta.nextjs.org/docs)
- [Typescript Documentaion](https://www.typescriptlang.org/docs/)
- [TailwindCSS Docs](https://tailwindcss.com/docs/installation)
- [Material UI Documentaion](https://mui.com/material-ui/getting-started/overview/)

### How to make a Contribution?

Never made an open source contribution before? And wondering how to contribute to this project?
No worries! Here's a quick guide,

1. Choose any feature/bug you wish to contribute to.
2. Fork the repository into your own account.
3. Clone the repo you have forked in your local machine using `git clone https://github.com/<Your-name>/fitAI.git`
4. Create a new branch for your fix by using the command `git checkout -b YourName-branch-name `
5. Make the changes you wish to do and stage them using the command `git add files-you-have-changed ` or use `git add .`
6. Use the command `git commit -m "Short description of the changes"` to describe the changes you have done with a message.
7. Push the changes to your remote repository using `git push origin your-branch-name`
8. Submit a PR(pull request) to the upstream repository `Nishantjain10/fitAI` with a title and a small description.
9. Wait for the pull request to be reviewed by us.
10. Make appropriate changes if the maintainer recommends you to and submit it.
11. Await for your contribution to be merged into the repository.

Checkout the [Contributing.md](CONTRIBUTING.md) file before contributing.


## License

[MIT](LICENSE.md)


## Thanks to all the Contributors ❤️

<a href = "https://github.com/Nishantjain10/fitAI/graphs/contributors">
  <img src = "https://contrib.rocks/image?repo=Nishantjain10/fitAI"/>
</a>


## Your Support means a lot

Give a ⭐ to the project if you liked it. :)
