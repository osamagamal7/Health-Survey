# Health-Survey



#### a light-weight application where you can fill out a survey of your skin, sleep health, and keep track of them.

<img width="363" alt="Screen Shot 2022-03-10 at 1 42 53 PM" src="https://user-images.githubusercontent.com/31896040/157656636-74c340aa-05ec-438f-b348-f27998de4610.png">
<img width="363" alt="Screen Shot 2022-03-10 at 1 43 55 PM" src="https://user-images.githubusercontent.com/31896040/157656658-f41b6cea-b315-4a6f-b378-cff17dab2456.png">


### tools used to build this app:

    - React Native CLI.
    - typescript.
    - React Native Async Storage.
    - React Bottom Tab Navigation.
    - React Context. (it's not necessary and I could've consumed data from AsyncStorage)
    - Jest.
    - react-native-svg

### Improvements

Things that I would improve if I had more time:

- **Testing**: due to lack of time I was not able to test everything thoroughly and I was only able to test some components Using Jest & 
react-native-testing-library otherwise I would've covered other components and cases, and also added some other testing methodologies like
 Integration testing and E2E testing.

- **UI**: I listed the data stored in AsyncStorage in History screen in a simple way, i also would've improved the overall user experince and make it responsive
 on different screen sizes.

- **Input Validation**: I have limited the Input to just 2 digits, But user might type a number that's higher than 10, I could have handled this by shwing 
an error and prevent user from this case.




