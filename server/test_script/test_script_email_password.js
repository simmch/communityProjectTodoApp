/**
 * Authentication
 * Needs to move to it's own
 *.js file
 */

const token = 'custom-id';
app.post('/signUp', (req,res)=> {
    let email = req.body.user.email;
    let password = req.body.user.password;
        /**
         * Create User
         */
        db.admin.auth().createUser({
            email: email,
            password: password,
            displayName: "test",
            disabled: false,
            emailVerified: false
        })
            .then((userRecord)=> {
                console.log('Successfully created new user..\n', userRecord);
            })
            .catch((error)=> {
                console.log('Error: ', error)
        })
    });


