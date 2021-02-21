## Ionic Vue Instagram Template

![Netlify Status](https://api.netlify.com/api/v1/badges/fc2b8d51-2242-440c-8f6c-f283e77154c4/deploy-status)

Instagram-inspired [Ionic Vue](https://ionicframework.com/vue) template.

[Demo](https://ionic-vue-mobile-template-06.netlify.app)

## Project setup
```
npm install
```

### Run on the browser - development
```
npm run serve
```

## Design
![Screenshot|316x500, 75%](/design.jpg "Screenshot")

## Native

Using [Capacitor](https://capacitorjs.com/docs/getting-started) for native builds

## Prepare native builds

### iOS testing and distribution
1. Download the latest Xcode
2. `npm run build`
3. `npx cap add ios`
3. `npx cap copy`
4. `npx cap open ios` Xcode takes a few seconds to index the files; keep an eye at the top of Xcode's window for progress.

[Not compulsory] For sanity check click on the play button in the top left. This will prepare and run the app in a simulator, if all goes well you should be able to run the app and click around. If not, create an issue 🤷 and I will have a look.

### Android testing and distribution
1. Download the latest Android Studio
2. `npm run build`
3. `npx cap add android`
3. `npx cap copy`
4. `npx cap open android` Android Studio takes a few seconds to index the files, keep an eye at the bottom of Android Studio for progress.
5. Testing - When indexing is complete, look for a green play button. Click the play button and it will launch the app in an emulator ([See here to setup Emulator](https://developer.android.com/studio/run/managing-avds)) or on the phone, if a phone is connected via USB.

## Official Docs
- [Getting started](https://ionicframework.com/vue)

## Resources
- [Newsletter](https://mailchi.mp/b9133e120ccf/sqan8ggx22) - Signup to my Ionic Vue newsletter to get templates and other Ionic Vue updates in your inbox!
- [YouTube Channel](https://www.youtube.com/channel/UC5jZ6srZuLwt3O3ZtuM1Dsg) - Subscribe to my YouTube channel.
- [Ionic Vue Tempalates](https://tinyurl.com/y2gl39dk) - Free Ionic Vue Templates.
- [Ionic Vue VSCode Snippets](https://marketplace.visualstudio.com/items?itemName=dlodeprojuicer.ionicvuesnippets) - This extension adds ionic-vue snippets. Quickly add ionic-vue component code by simply typing iv. The iv prefix will show a range of snippets to choose from.

## Affiliates
I want to keep doing these templates for free for as long as possible. I have joined a few affiliate programs to help take care of the costs. 
- [Pixeltrue](https://www.pixeltrue.com/?via=simo) - High-quality illustrations that will help you build breath-taking websites.
- [Getrewardful](https://www.getrewardful.com/?via=simo) - Create your own affiliate program.

Alternatively, you can buy me a coffee <a href="https://www.buymeacoffee.com/simomafuxwana" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" width="120px" height="30px" style="height: 30px !important;width: 120px !important;" ></a>

## Credits
- [Carlos Martinez](https://github.com/cmartinezone/IonicVueExplorePlaces)
- [Tami Maiwashe](https://www.linkedin.com/in/tami-maiwashe-32824a19a/) - Documentation

## Contact
- [@dlodeprojuicer](https://twitter.com/dlodeprojuicer) on Twitter
