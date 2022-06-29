### router 6 niye anisul vai er tutorial ta khub effective.

- router dom er Link tag er state props akare oi component theke jekono kichu pathano jaay, seta hote pare kono url path, hote pare kono object. beparta khub e kaje laage. then, oi link e click kore destination e jaoar por sekhane useLocation er location.state diye ja pathano hoyeche seta puropuri paoa jaay. kintu dynamic route er khetre object pathate parini, oi dynamic route tai peyechi location.state er moddhe. orthat, dynamic route er dynamic part ta location.state e joma thake. ekhane login er ekta valo kapjhap ache, but 10 min time diye console kore kore dekhle valo bujhe fela somvob.

- parameter theke kono query er value access korte chaile ba kono query parameter set korte chaile useSearchParams hook er maddhome easily kora jay, jeta anisul vai 50 min er por khub shundor kore dekhiyeche

-Navigate use korle replace use kora uchit, noile same route ei vitore vitore onk stack hoy

# React checklist :

     0. Virtual DOM, linting, event handling, re-rendering, conditional rendering, list-keys, form handling,
          state lifting, error boundaries, Jest,   overall all the videos of sumit vai.
     1. Class components with life cycle methods
     2. State, JSX, props
     3. Functional components and hooks, custom hook
     4. Es6 module one more time
     5. React router, private route, dashboard, dynamic route, pagination, Firebase in depth
     6. Material UI, styled component
     7. Chart, Map, react hook form, formik
     8. Local storage, add to cart, increase/decrease quantity or price
     9. Context API, react auth, and private route one more time
    10. CRUD operation with node and express server in MongoDB
    11. JWT token
    12. How to deal with date-time or calendar in react?
    13. How to secure the admin route in react and all about JWT one more time
    14. How to integrate payment gateway(stripe / SSL commerce) and image upload functionality in react?

# plan for routing test..

      1. gonna implement routing system
      2. gonna implement login system (if a user is logged in tries to acces a private route, he will be able to visit that page. or, if he is not logged in, he will be redirected to the login page).
      3. user can select random products and order them
      4. after login from the login page, user will be redirected to the dashboard page. if he/she is a normal user, he will see his/her dashboard. If the user is an admin, he will see admin dashboard.
      5. user and admin, both dashboard going to be proteted. no one can access others, anyhow.

# Error Boundary

- jodi kono karone app crush kore totally ba kono ekta nirdishto component, react tahole lal batti jalaya dey ebong sheta kete dile blank page dekhay. to ei beparta theke bachay error boundry. jodi kono karone app crash kore, tahole Ei error boundry ekta fallback UI dekhay. ekhono funcitonal component e eta ready hoyni, tai class component diye korechi ami.
