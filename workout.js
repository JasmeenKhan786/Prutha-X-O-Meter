const workouts = [
  {
    id: '01',
    category: 'Arm Workout',
    name: 'Beginner Arm Workout',
    image1:
      'https://firebasestorage.googleapis.com/v0/b/exercise-app-c0408.appspot.com/o/beginner_arm.png?alt=media&token=8d88c4a4-2bbe-4037-9bba-76a77c11302e',
    image2: require('./assets/logo.png'),
    duration: '30 - 45 mins',
    level: 'Beginner',
    description: [
      {
        step: '1 ',
        name: 'Arm Circles',
        description:
          'Rotate your arms forward  and then rotate your arms backward. Put your arm across your chest and pull with your other arm. Repeat for both arms.(30 secs)',
        image: '',
      },
      {
        step: '2',
        name: 'Shoulder Stretch',
        description:
          'Put your arm across your chest and pull with your other arm. Repeat for both arms. (30 secs)',
        image: '',
      },
      {
        step: '3',
        name: 'Bicep Stretch',
        description:
          'Find a nearby wall and pull your arm against it. Repeat for both arms. (30 secs)',
      },
      {
        step: '4',
        name: 'Tricep Stretch',
        description:
          'Put your arm behind your head and pull with your other arm. Repeat for both arms. (30 secs)',
      },
      {
        step: '5',
        name: 'Forearm Stretch',
        description:
          'Turn your hand backwards so that your palm is facing up. Press your fingers against the ground. Repeat for both arms. (30 secs)',
      },
      {
        step: '6',
        name: 'Jumping Jacks',
        description:
          'Stand upright with feet together and hands at your sides. Begin exercise by simultaneously raising your hands up above your head, while jumping up just enough to spread your feet about twice shoulder width apart. Immediately reverse movement back to starting position without pausing. (30 secs)',
      },
      {
        step: '7',
        name: 'Lateral Raises',
        description:
          'With a dumbbell in each hand, palms facing in, stand upright with your feet shoulder width apart and your arms down by your sides. (if you do not have a dumbbell, you can find other weights at home such as your waterbottle.) This is your starting position. With straight arms, exhale as you raise the dumbbells out to the sides until your arms are parallel with the floor. Hold the contraction for a moment and then inhale as you lower the dumbbells back to your starting position. Repeat 15 times',
      },
      {
        step: '8',
        name: 'Military Press',
        description:
          'Grasp a barbell with hands wider than shoulder width apart and your palms facing down. (If you do not have a barbell, you can find weights in your house such as a chair.) Keep your feet shoulder width apart and your knees slightly bent. Raise the barbell to your chest and then overhead and slightly forward for your starting position.Inhale as you slowly lower the bar back to your chest. Exhale as you slowly raise the bar back overhead to the starting position. Repeat 15 times',
      },
      {
        step: '9',
        name: 'Barbell Curl',
        description:
          'Stand up straight while holding a barbell in a shoulder-width grip. (If you do not have a barbell, you can find weights in your house such as a chair.) Contract your biceps to curl the weight forward. Your upper arms should remain stationary during this process. Continue moving the barbell until the biceps are fully contracted and the bar is at shoulder height. Hold this position for a second and then squeeze your biceps. Bring the barbell back to the starting position. Repeat 15 times.',
      },
      {
        step: '10',
        name: 'Dumbbell Curl',
        description:
          'Stand up and hold a dumbbell in each hand. (if you do not have a dumbbell, you can find other weights at home such as your waterbottle.) Turn the palms of your hands until they are facing forward. This is the starting position. While keeping your upper arms stationary, curl the dumbbells while contracting your biceps. Keep raising the weights until your biceps are fully contracted. The dumbbells should be at shoulder level. Hold this position briefly and squeeze your biceps. Slowly lower the dumbbells back to the starting position, inhaling as you do so. Repeat 15 times',
      },
      {
        step: '11',
        name: 'Bench Dip',
        description:
          'Start the exercise by placing a bench behind your back. Keeping the bench perpendicular to your body and while looking away from it, hold onto the bench with your hands fully extended, shoulder width apart. Your legs will be extended in front of you. Bend forward at the waist. This is the starting position. Lower your body by bending at the elbows until you have moved down far enough so that the angle between your upper arm and forearm is just under 90 degrees. Using your triceps, lift yourself back up into the starting position. Repeat 15 times',
      },
      {
        step: '12',
        name: 'Dumbbell Tricep Extension',
        description:
          'Stand upright, feet shoulder width apart, with a dumbbell in both hands.(if you do not have a dumbbell, you can find other weights at home such as your waterbottle.) Hold the dumbbell perpendicular to the floor with your hands under the top plate, palms facing upward. Carefully raise the dumbbell overhead. This is your starting position. Keep your upper arms stationary as you inhale and lower the dumbbell behind your head. Exhale as you raise the dumbbell back to the starting position. Repeat 15 times.',
      },
      {
        step: '13',
        name: 'Seated Dumbbell Wrist Curl',
        description:
          'With a dumbbell in each hand, sit on a flat bench and plant your feet on the floor shoulder width apart. (if you do not have a dumbbell, you can find other weights at home such as your waterbottle.) With palms facing up, rest your forearms against your legs and your wrists hanging right off your knees. This is your starting position. Exhaling, curl your wrists upward. Inhaling, uncurl your wrists and return to the starting position. Repeat 15 times',
      },
      {
        step: '14',
        name: 'Seated Dumbbell Reverse Wrist Curl',
        description:
          'With a dumbbell in each hand, sit on a flat bench and plant your feet on the floor shoulder width apart. (if you do not have a dumbbell, you can find other weights at home such as your waterbottle.) With palms facing down, rest your forearms against your legs and your wrists hanging right off your knees. This is your starting position. Exhaling, curl your wrists upward. Inhaling, uncurl your wrists and return to the starting position. Repeat 15 times',
      },
      {
        step: '15',
        name: 'Cooldown',
        description:
          'Repeat the stretches you did in the beginning of the workout: arm circles, shoulder stretches, bicep stretches, tricep stretches, and forearm stretches. Hold each stretch for 30 seconds and do it for both arms.',
      },
    ],
  },
  {
    id: '02',
    category: 'Arm Workout',
    name: 'Intermediate Arm Workout',
    image1:
      'https://firebasestorage.googleapis.com/v0/b/exercise-app-c0408.appspot.com/o/intermediate_arm.png?alt=media&token=759990a7-e800-4b24-a92c-ef25a1639317',
    image2: require('./assets/logo.png'),
    duration: '30 - 45 mins',
    level: 'Intermediate',
    description: [
      {
        step: '1 ',
        name: 'Arm Circles',
        description:
          'Rotate your arms forward  and then rotate your arms backward. Put your arm across your chest and pull with your other arm. Repeat for both arms.(30 secs)',
        image: '',
      },
      {
        step: '2',
        name: 'Shoulder Stretch',
        description:
          'Put your arm across your chest and pull with your other arm. Repeat for both arms. (30 secs)',
        image: '',
      },
      {
        step: '3',
        name: 'Bicep Stretch',
        description:
          'Find a nearby wall and pull your arm against it. Repeat for both arms. (30 secs)',
      },
      {
        step: '4',
        name: 'Tricep Stretch',
        description:
          'Put your arm behind your head and pull with your other arm. Repeat for both arms. (30 secs)',
      },
      {
        step: '5',
        name: 'Forearm Stretch',
        description:
          'Turn your hand backwards so that your palm is facing up. Press your fingers against the ground. Repeat for both arms. (30 secs)',
      },
      {
        step: '6',
        name: 'Jumping Jacks',
        description:
          'Stand upright with feet together and hands at your sides. Begin exercise by simultaneously raising your hands up above your head, while jumping up just enough to spread your feet about twice shoulder width apart. Immediately reverse movement back to starting position without pausing. (30 secs)',
      },
      {
        step: '7',
        name: 'Seated Dumbbell Military Press',
        description:
          'Grab a pair of dumbbells and sit down on a upright bench (90-degrees). (if you do not have a dumbbell, you can find other weights at home such as your waterbottle.) Rest dumbbells on your thighs. Begin exercise by bringing the dumbbells up to your shoulders... This can be done by quickly raising one leg at a time to assist in getting the dumbbells up to your shoulders (Do not try to just raise them up with just your arms). Dumbbells should now be just above your shoulders with palms facing forward and elbows perpendicular to the floor. Now, start exercise by taking a deep breath and then exhaling as you push dumbbells straight up above your head. Pause, then lower weight back down to shoulders. Repeat 15 times',
      },
      {
        step: '8',
        name: 'Dumbbell Lateral Raises',
        description:
          'Grab a pair of dumbbells and stand tall with back straight and shoulders in place. (if you do not have a dumbbell, you can find other weights at home such as your waterbottle.) Next, bend elbows upward so they form a 90 degree angle with your upper and lower arm. Keep elbows tucked into sides. This is the starting position. Begin exercise by raising your upper arms straight out from your sides until they are in line with your shoulders. Do not change the bend in your elbows while doing so. Lower arms back down slowly to starting position. Repeat 15 times',
      },
      {
        step: '9',
        name: 'Double Twist Dumbbell Curl',
        description:
          'With a dumbbell in each hand, start with your hands at your sides, palms facing away from your body. (if you do not have a dumbbell, you can find other weights at home such as your waterbottle.) Slowly bring the weights forward, curling them and twisting your wrists simultaneously so your palms are facing you. Complete the curl and begin lowering the weight. While lowering the weight, rotate your wrists again so your palms are facing away from you when they are down at your sides. Repeat 15 times.',
      },
      {
        step: '10',
        name: 'Cross-Body Dumbbell Curl',
        description:
          'Take a dumbbell in each hand and stand straight up with the dumbbells at your waist. (if you do not have a dumbbell, you can find other weights at home such as your waterbottle.) Curl your right arm upwards and across the front of your body to the left side of your chest. As you curl the dumbbell upwards turn your wrist so that the thumb side of your hand is facing outwards away from your body. Bring the dumbbell back down to your waist and then do the same motion with your left arm. Repeat 15 times.',
      },
      {
        step: '11',
        name: 'Lying Dumbbell Tricep Extension',
        description:
          'Lie down on a flat bench and hold two dumbbells directly in front of you. (if you do not have a dumbbell, you can find other weights at home such as your waterbottle.) Extend your arms at a 90-degree angle from your torso. Your palms should be facing in and your elbows should be tucked in close to your body. This is your starting position. Lower the dumbbells slowly until they are positioned near your ears. Inhale as you do so, keeping your upper arms stationary. Use your triceps to bring the weight up to the starting position. Exhale as you perform this part of the exercise. Repeat 15 times.',
      },
      {
        step: '12',
        name: 'Dumbbell Squeeze Press',
        description:
          'Take the dumbbells in your hands and lay down on the bench. (if you do not have a dumbbell, you can find other weights at home such as your waterbottle.) Place the dumbbells together side by side and lift them up over your chest. Lower them down together and touching each other and then push the dumbbells back up. Repeat 15 times.',
      },
      {
        step: '13',
        name: "Trap Bar Farmer's Walk",
        description:
          'Grab the barbell with both hands. (If you do not have a barbell, you can find weights in your house such as a chair.) Hold the barbell at your waist and stand straight up. Begin walking forward for 30 seconds Once you have completed 30 seconds, set the weight back down. Repeat 3 times.',
      },
      {
        step: '14',
        name: 'Reverse Bar Curl',
        description:
          "Grab an EZ-bar with an overhand grip that is at the second grip position from the center of the EZ-bar. (If you do not have a barbell, you can find weights in your house such as a chair.) Stand tall with a shoulder-width stance and EZ-bar hanging down in front at arm's length.Begin exercise by slowly curling bar up to your shoulders keeping your upper arms in place and elbows tucked in. Only your forearms should be swinging up/down at your elbows.Pause at the top position and then slowly lower weight back down letting your arms fully straighten out. Repeat reps as necessary",
      },
      {
        step: '15',
        name: 'Cooldown',
        description:
          'Repeat the stretches you did in the beginning of the workout: arm circles, shoulder stretches, bicep stretches, tricep stretches, and forearm stretches. Hold each stretch for 30 seconds and do it for both arms.',
      },
    ],
  },
  {
    id: '03',
    category: 'Arm Workout',
    name: 'Advanced Arm Workout',
    image1:
      'https://firebasestorage.googleapis.com/v0/b/exercise-app-c0408.appspot.com/o/advanced_arm.png?alt=media&token=ffe1d746-b3c0-4030-9fde-45014704c2ec',
    image2: require('./assets/logo.png'),
    duration: '30 - 45 mins',
    level: 'Beginner',
    description: [
      {
        step: '1 ',
        name: 'Arm Circles',
        description:
          'Rotate your arms forward  and then rotate your arms backward. Put your arm across your chest and pull with your other arm. Repeat for both arms.(30 secs)',
        image: '',
      },
      {
        step: '2',
        name: 'Shoulder Stretch',
        description:
          'Put your arm across your chest and pull with your other arm. Repeat for both arms. (30 secs)',
        image: '',
      },
      {
        step: '3',
        name: 'Bicep Stretch',
        description:
          'Find a nearby wall and pull your arm against it. Repeat for both arms. (30 secs)',
      },
      {
        step: '4',
        name: 'Tricep Stretch',
        description:
          'Put your arm behind your head and pull with your other arm. Repeat for both arms. (30 secs)',
      },
      {
        step: '5',
        name: 'Forearm Stretch',
        description:
          'Turn your hand backwards so that your palm is facing up. Press your fingers against the ground. Repeat for both arms. (30 secs)',
      },
      {
        step: '6',
        name: 'Jumping Jacks',
        description:
          'Stand upright with feet together and hands at your sides. Begin exercise by simultaneously raising your hands up above your head, while jumping up just enough to spread your feet about twice shoulder width apart. Immediately reverse movement back to starting position without pausing. (30 secs)',
      },
      {
        step: '7',
        name: 'Handstand Push-Up',
        description:
          'Position yourself with your back to the wall. Bend at the waist. Place both hands on the floor, shoulder width apart. Kick yourself up against the wall. Keep your arms straight. Your body should be upside down with your arms and legs fully extended. Lower yourself to the ground slowly, inhaling as you do so, until your head is almost touching the floor. Push yourself back up slowly until your elbows are completely locked. Repeat 15 times',
      },
      {
        step: '8',
        name: 'Dumbbell Lateral Raise',
        description:
          'Grab a pair of dumbbells and stand tall with back straight and shoulders in place. (if you do not have a dumbbell, you can find other weights at home such as your waterbottle.) Next, bend elbows upward so they form a 90 degree angle with your upper and lower arm. Keep elbows tucked into sides. This is the starting position. Begin exercise by raising your upper arms straight out from your sides until they are in line with your shoulders. Do not change the bend in your elbows while doing so. Next, rotate lower arms backward (this is the external rotation part of the exercise) so that the dumbbells are now in line with your shoulders. Slowly reverse movements back to starting position. Repeat 15 times',
      },
      {
        step: '9',
        name: "21's",
        description:
          'Stand up while holding an E-Z curl bar with an underhand grip. (If you do not have a barbell, you can find weights in your house such as a chair.) Let arms hang down. This is the starting position. Curl weight up just until your elbow is bent 90 degrees and no more. Lower back down and repeat for total of 7. Next, immediately bring bar up to your shoulders and lower bar down until elbows are bent 90 degrees. Repeat for a total of 7. Finally, immediately lower arms all the way down and curl bar up to your shoulders. Lower back down all the way and repeat for a total of 7.',
      },
      {
        step: '10',
        name: 'Reverse Dumbbell Curl',
        description:
          'Stand upright, feet shoulder width apart, with a dumbbell in each hand. (if you do not have a dumbbell, you can find other weights at home such as your waterbottle.) Extend your arms downward and slightly in front of you so that your palms are facing you. This is the starting position. Exhale as you bend your arms up, bringing the dumbbells to your shoulders. Hold for a moment and then inhale as you lower the dumbbells back to the starting position. Repeat 15 times.',
      },
      {
        step: '11',
        name: 'Reverse-Grip Bench Press',
        description:
          "Lie down on a flat bench and grasp a barbell with an underhand grip that's about shoulder-width apart. (If you do not have a barbell, you can find weights in your house such as a chair.)Hold barbell above sternum with arms completely straight. This is the starting position. Begin by lowering bar straight down to your chest, pause just above your chest, then push weight back up to starting position. Exhale while pushing weight up. Repeat 15 times.",
      },
      {
        step: '12',
        name: 'Sphinx Push-Up',
        description:
          'Get down into a plank position so that your toes are touching the ground as well as your forearms and the palms of your hands. Keep your body in a straight line. Using the palms of your hands push yourself upwards and lock your arms out. Lower yourself back down onto forearms. Repeat 15 times.',
      },
      {
        step: '13',
        name: 'Wrist Push-Up',
        description:
          'Get down into push-up position with your knuckles against the ground. Your fingers are going to be pointed in towards each other. As you lower your chest to the ground rotate your hands out so that the backs of your hands are now flat against the ground. Now push yourself back up and as you get to the top rotate your hands back onto your knuckles. Repeat 15 times.',
      },
      {
        step: '14',
        name: 'Two Finger Deadlift',
        description:
          'Stand with your feet about shoulder width apart and have the barbell right in front of you on the ground. Bend at the knees and slightly at the back and squat down. Using only two fingers on each hand (pointer/middle or middle/ring) grab the bar about shoulder width apart. Stand up straight and lift the barbell up as you do. Squat back down and lower the weight to the ground again. Repeat 15 times.',
      },
      {
        step: '15',
        name: 'Cooldown',
        description:
          'Repeat the stretches you did in the beginning of the workout: arm circles, shoulder stretches, bicep stretches, tricep stretches, and forearm stretches. Hold each stretch for 30 seconds and do it for both arms.',
      },
    ],
  },
  {
    id: '04',
    category: 'Leg Workout',
    name: 'Beginner Leg Workout',
    image1:
      'https://firebasestorage.googleapis.com/v0/b/exercise-app-c0408.appspot.com/o/beginner_leg.png?alt=media&token=40f9c9f1-9a97-4430-95e0-247684f32472',
    image2: require('./assets/logo.png'),
    duration: '30 - 45 mins',
    level: 'Beginner',
    description: [
      {
        step: '1',
        name: 'Quad Stretch',
        description:
          'Pick up one leg and pull it as hard as you can behind. Repeat for both legs. (30 secs)',
      },
      {
        step: '2',
        name: 'Hamstring Stretch',
        description: 'Keep your feet together and touch your toes. (30 secs)',
      },
      {
        step: '3',
        name: 'Glutes Stretch',
        description:
          'Lay down. Pull one leg as close as you can to yourself. Repeat for both legs. (30 secs)',
      },
      {
        step: '4',
        name: 'Calves Stretch',
        description:
          'Find a nearby wall and put your foot against it. Repeat for both legs. (30 secs)',
      },
      {
        step: '5',
        name: 'Jumping Jacks',
        description:
          'Stand upright with feet together and hands at your sides. Begin exercise by simultaneously raising your hands up above your head, while jumping up just enough to spread your feet about twice shoulder width apart. Immediately reverse movement back to starting position without pausing. (30 secs)',
      },
      {
        step: '6',
        name: 'Squats',
        description:
          '(If you do not have weights, you can just use body weight and double the reps. )Using a squat rack, place the barbell at shoulder height. Turn around so that the barbell is below your neck and behind your shoulders. With your arms positioned wide on the barbell, push up with your legs and straighten up to lift the barbell onto your back. Step forward and place your feet shoulder width apart with your toes pointing slightly outward. With your back straight and your head up, inhale and bend your knees until you are in a seated position and your knees are perpendicular to your toes. Exhaling, push off with your heels to straighten your legs and return to a standing position. Repeat 15 times.',
      },
      {
        step: '7',
        name: 'Lunges',
        description:
          "Stand with your feet shoulder's width apart. Step forward with your right foot, while keeping your left foot planted.You will bend your right leg until your right thigh is inline with your knee and parallel to the floor. Return to starting position and repeat for opposite leg. Repeat 15 times.",
      },
      {
        step: '8',
        name: 'Straight-Leg DeadLift',
        description:
          "(If you don't have weights, find something else like a jug of milk in each hand.)Stand upright with your feet shoulder width apart and a dumbbell in each hand, palms facing inward. Keep your knees slightly bent for your starting position. Without moving your knees, keep your back straight and exhale as you bend forward at the waist. When you feel the stretch in your hamstrings, inhale and reverse the motion and return to the starting position. Repeat 15 times.",
      },
      {
        step: '9',
        name: 'Front Leg Raise',
        description:
          'Stand near a chair or a flat surface and hold onto it with one hand. Swing your leg forward, keeping it straight. Continue doing so with a downward swing and bring your leg as far back as you can. Repeat 5-10 times and then switch legs. Repeat 15 times',
      },
      {
        step: '10',
        name: 'Hip Raise',
        description:
          'Lie down with back on an exercise mat and arms straight out from sides. Palms facing up. Place feet flat on the floor about a foot away from your buttocks (about as close to your butt as is comfortable). Next, begin exercise by squeezing your glutes and raising hips up until your body forms a straight line from your knees to your shoulders. Hold for at least 5 seconds, then lower back down. Repeat 15 times.',
      },
      {
        step: '11',
        name: 'Prone Leg Extension',
        description:
          'Lay down on your stomach. Place your hands together on the floor under your chin. Rest your chin on your hands. Spread your knees as far apart as you can on the floor and bring your feet up so that your toes are pointed toward the ceiling. Bring your feet together in the air so that your big toes are touching. This is the starting position. Begin exercise by raising your thighs off the ground. Next, while keeping your thighs up off the ground, extend your feet out so that your legs become straight. Reverse the motion back in so that your toes touch. Repeat 15 times.',
      },
      {
        step: '12',
        name: 'Jump Rope',
        description:
          "(If you don't have a jump rope, you can jump in place.) Stand on a soft surface (rubber gym mat). Do not perform on concrete or other hard surface. Grab a rope handle in each hand and place feet in front of jump rope, so that the rope is resting on the ground behind your heels. Hold arms down at arm's length, tuck elbows into sides and bring your hands up so that your forearms are parallel to the ground. This is the starting position.reset Begin exercises by swinging rope up and over your resethead and then begin to jump up off the ground with both feet as the rope begins to reach your feet. Jump for 30 seconds and repeat 3 times.",
      },
      {
        step: '13',
        name: 'Toe Raisers',
        description:
          '(If you do not have weights, you can just use body weight and double the reps.)Grab a pair of dumbbells and hold them at your sides or up on your shoulders. Stand with your feet hip-width apart and your feet pointed straight forward. Begin exercise by raising up on your toes as high as possible. Slowly lower your heels back down to the ground. Repeat 15 times.',
      },
      {
        step: '14',
        name: 'Cooldown',
        description:
          'Repeat the stretches you did in the beginning of the workout: Quad Stretches, Hamstring Stretches, Glute Stretches, Calf Stretches, and Jumping Jacks. Hold each stretch for 30 seconds and do it for both legs.',
      },
    ],
  },
  {
    id: '05',
    category: 'Leg Workout',
    name: 'Intermediate Leg Workout',
    image1:
      'https://firebasestorage.googleapis.com/v0/b/exercise-app-c0408.appspot.com/o/intermediate_leg.png?alt=media&token=41fa886f-9ea7-4529-979c-7821ec0c842c',
    image2: require('./assets/logo.png'),
    duration: '30 - 45 mins',
    level: 'Intermediate',
    description: [
      {
        step: '1',
        name: 'Quad Stretch',
        description:
          'Pick up one leg and pull it as hard as you can behind. Repeat for both legs. (30 secs)',
      },
      {
        step: '2',
        name: 'Hamstring Stretch',
        description: 'Keep your feet together and touch your toes. (30 secs)',
      },
      {
        step: '3',
        name: 'Glutes Stretch',
        description:
          'Lay down. Pull one leg as close as you can to yourself. Repeat for both legs. (30 secs)',
      },
      {
        step: '4',
        name: 'Calves Stretch',
        description:
          'Find a nearby wall and put your foot against it. Repeat for both legs. (30 secs)',
      },
      {
        step: '5',
        name: 'Jumping Jacks',
        description:
          'Stand upright with feet together and hands at your sides. Begin exercise by simultaneously raising your hands up above your head, while jumping up just enough to spread your feet about twice shoulder width apart. Immediately reverse movement back to starting position without pausing. (30 secs)',
      },
      {
        step: '6',
        name: 'Split Squat Jump',
        description:
          'Stand upright with your feet together and your arms at your side. Jump in the air and land in a split squat position so that your right leg is forward with the knee bent and your left leg is backward standing on your toes. Without pausing, jump in the air again and reverse the position of your legs. Repeat 15 times.',
      },
      {
        step: '7',
        name: 'Dumbbell Step Up',
        description:
          "Those without access to weights can hold 2 water jugs or wear a back pack on their back. If you don't have weights, perform bodyweight step ups for 15 reps per set and aim to explode upwards as fast as possible on each rep. Use a bench, box or stable chair at (or just below) knee height. Explode upward as fast as you can on each repetition. Lower slowly and repeat with the same leg for 8 repetitions before switching legs. Make sure that you keep your heel on the bench and your knee doesn't go over your toe. Keep your chest up throughout the exercise. Repeat 15 times.",
      },
      // stopping here continue with step 8
      {
        step: '8',
        name: 'Swiss Chair Hamstring Curl',
        description:
          'Lie down with back flat on the floor and heels propped up on the chair. Arms should be flat on the floor and in line with your shoulders for stability. Next, raise hips up so that they are in line between your knees and shoulders. Begin hamstring curl by rolling ball backward toward you butt so that your feet are flat on the chair and knees extended toward the ceiling. Reverse movement back to starting position. Repeat 15 times ',
      },
      {
        step: '9',
        name: 'Single Leg T-Squat',
        description:
          "Stand on one leg and raise the other leg behind you while leaning forward to form a 'T'. Squat down as low as you can on your one standing leg, using your arms for balance. Straighten your leg and return to the starting position. Repeat as many times as required. Switch legs and repeat the process to work both sides equally. Repeat 15 times",
      },
      {
        step: '10',
        name: 'Box Jump',
        description:
          'Stand facing the box. Squat down in jumping motion. Jump onto the box. As you jump throw your arms up to help propel you upwards. Land on the box as softly as possible.  Repeat 15 times.',
      },
      {
        step: '11',
        name: 'Out-N-Up',
        description:
          'Begin by placing your feet wide apart, about double shoulder-width apart. Bend at the knees and lower your butt down until it is parallel with the ground. Explode up off the ground and bring your feet in about hip-width apart. Repeat 15 times.',
      },
      {
        step: '12',
        name: 'Jump Rope',
        description:
          "(If you don't have a jump rope, you can jump in place.) Stand on a soft surface (rubber gym mat). Do not perform on concrete or other hard surface. Grab a rope handle in each hand and place feet in front of jump rope, so that the rope is resting on the ground behind your heels. Hold arms down at arm's length, tuck elbows into sides and bring your hands up so that your forearms are parallel to the ground. Raise your left foot off the ground slightly so that you are standing on your right foot. This is the starting position. Begin exercise by swinging rope up and over your head, then begin to jump up off the ground with your right foot as the rope begins to reach your feet. As you land on your right foot, place your left foot down and then slightly raise your right foot. Now jump off your left foot this time and then repeat, alternating back and forth. Jump for 30 seconds and repeat 3 times.",
      },
      {
        step: '13',
        name: 'Toe Raisers',
        description:
          '(If you do not have weights, you can just use body weight and double the reps.) Place a dumbbell in each hand, arms extended down by your sides, palms facing in. Stand upright with the balls of your feet on an elevated platform with your toes pointing forward and your heels extended off the back end. This is your starting position. Exhale as you raise up on your toes as high as possible. Hold for a moment and then inhale as you lower your heels back down as far as possible without actually leaving the platform. Repeat 15 times',
      },
      {
        step: '14',
        name: 'Cooldown',
        description:
          'Repeat the stretches you did in the beginning of the workout: Quad Stretches, Hamstring Stretches, Glute Stretches, Calf Stretches, and Jumping Jacks. Hold each stretch for 30 seconds and do it for both legs.',
      },
    ],
  },
  {
    id: '06',
    category: 'Leg Workout',
    name: 'Advanced Leg Workout',
    image1:
      'https://firebasestorage.googleapis.com/v0/b/exercise-app-c0408.appspot.com/o/advanced_leg.png?alt=media&token=7343d884-a9cc-44a1-b5de-cc6a1ad23688',
    image2: require('./assets/logo.png'),
    duration: '30 - 45 mins',
    level: 'Advanced',
    description: [
      {
        step: '1',
        name: 'Quad Stretch',
        description:
          'Pick up one leg and pull it as hard as you can behind. Repeat for both legs. (30 secs)',
      },
      {
        step: '2',
        name: 'Hamstring Stretch',
        description: 'Keep your feet together and touch your toes. (30 secs)',
      },
      {
        step: '3',
        name: 'Glutes Stretch',
        description:
          'Lay down. Pull one leg as close as you can to yourself. Repeat for both legs. (30 secs)',
      },
      {
        step: '4',
        name: 'Calves Stretch',
        description:
          'Find a nearby wall and put your foot against it. Repeat for both legs. (30 secs)',
      },
      {
        step: '5',
        name: 'Jumping Jacks',
        description:
          'Stand upright with feet together and hands at your sides. Begin exercise by simultaneously raising your hands up above your head, while jumping up just enough to spread your feet about twice shoulder width apart. Immediately reverse movement back to starting position without pausing. (30 secs)',
      },
      {
        step: '6',
        name: 'Walking Overhead Lunge',
        description:
          'Take a barbell and hold it over your head with both hands. (If you do not have a barbell, you can do body weight and double the reps.) Step forward with your right foot in a lunge motion and bend at both knees till they make a 90 degree angle. Now step with your left foot and repeat the motion. Repeat 15 times',
      },
      {
        step: '7',
        name: 'Pistol Squat',
        description:
          'Stand on your left leg and hold your right foot 6-12 inches off the ground. Hold your hands together in front of your body. Bend your left knee and lower your butt down to your heel. Keep your right leg straight the whole time and off the ground. Stand back up only using your left leg. Repeat this motion 15 times and then switch legs.',
      },
      // stopping here continue with step 8
      {
        step: '8',
        name: 'Sumo Squat to Stand',
        description:
          'Stand with feet shoulder-width apart. Keep legs straight, bend over at waist and grab toes. Try not to bend knees at all if possible. Next, lower hips down into a squat while pushing shoulders back and chest up, All done without letting go of toes. Next, raise your hips back up to starting position with hands still on toes. Repeat 15 times. ',
      },
      {
        step: '9',
        name: 'Single Leg Good Morning',
        description:
          '(If you do not have weights, you can just use body weight and double the reps.)Position a barbell across upper back with an overhand grip. Stand with feet hip-width apart and a slight bend in the knees. Next, raise your right foot of the ground by bending your knee. Begin by bending at the hips forward, without bending your left knee, until your upper body is almost parallel to the floor. Pause for a brief moment and then raise torso back up to starting position. Repeat 15 times',
      },
      {
        step: '10',
        name: 'Seated Box Jump',
        description:
          'Face the box you are going to jump onto and then sit down on a bench or another box that is about 2 feet high. Stand up off the box you are sitting on and at the same time jump up on the box in front of you. Jump off two feet and land on two feet. Step back down and reset to starting position. Repeat 15 times.',
      },
      {
        step: '11',
        name: 'Prone Leg Extension',
        description:
          'Take a dumbbell or kettlebell and hold it with both hands under your chin. (If you do not have weights, you can just use body weight and double the reps.) Stand with your feet shoulder width apart. Squat down so that you are almost sitting on your heels. Straighten your legs out and lean your body forward at the same time. As you lean forward stretch your arms down so that the weight goes between your legs. Bend your legs again, sit back on your calves, bring weight under your chin, and straighten your upper body back up. Repeat 15 times.',
      },
      {
        step: '12',
        name: 'Jump Rope',
        description:
          "(If you don't have a jump rope, you can jump in place.) Stand on a soft surface (rubber gym mat). Do not perform on concrete or other hard surface. Grab a rope handle in each hand and place feet in front of jump rope, so that the rope is resting on the ground behind your heels. Hold arms down at arm's length, tuck elbows into sides and bring your hands up so that your forearms are parallel to the ground. Raise your left foot off the ground slightly so that you are standing on your right foot. This is the starting position. Begin exercise by swinging rope up and over your head, then begin to jump up off the ground with your right foot as the rope begins to reach your feet. Raise your right knee as high as possible when jumping. As you land on your right foot, place your left foot down and then slightly raise your right foot. Now jump off your left foot this time and then repeat, alternating back and forth.Jump for 30 seconds and repeat 3 times.",
      },
      {
        step: '13',
        name: 'Toe Raisers',
        description:
          "Stand at the end of the ladder with your body facing forward.(If you don't have a ladder, use an imaginary ladder) Jump off of both feet and land with your right foot in the first box and your left foot outside the first box to the left. Jump again and rotate 180 degrees to your right. Land with your right foot again in the first box and left foot in the second box. Jump and rotate 180 degrees again but to the left this time. Land with your left foot in the second box again and your right foot outside the second box. Continue this pattern all the way down the ladder.",
      },
      {
        step: '14',
        name: 'Cooldown',
        description:
          'Repeat the stretches you did in the beginning of the workout: Quad Stretches, Hamstring Stretches, Glute Stretches, Calf Stretches, and Jumping Jacks. Hold each stretch for 30 seconds and do it for both legs.',
      },
    ],
  },
  {
    id: '07',
    category: 'Core Workout',
    name: 'Beginner Core Workout',
    image1:
      'https://firebasestorage.googleapis.com/v0/b/exercise-app-c0408.appspot.com/o/beginner_core.png?alt=media&token=f946e03b-07f6-4dcd-8bf2-dca03224c7e4',
    image2: require('./assets/logo.png'),
    duration: '30 - 45 mins',
    level: 'Beginner',
    description: [
      {
        step: '1',
        name: 'Seal Stretch',
        description:
          'Lay down on your stomach and keep your palms on the floor and push yourself up.  (30 secs)',
      },
      {
        step: '2 ',
        name: 'Arm Circles',
        description:
          'Rotate your arms forward  and then rotate your arms backward. Put your arm across your chest and pull with your other arm. Repeat for both arms.(30 secs)',
        image: '',
      },
      {
        step: '3',
        name: 'Shoulder Stretch',
        description:
          'Put your arm across your chest and pull with your other arm. Repeat for both arms. (30 secs)',
        image: '',
      },
      {
        step: '4',
        name: 'Tricep Stretch',
        description:
          'Put your arm behind your head and pull with your other arm. Repeat for both arms. (30 secs)',
      },
      {
        step: '5',
        name: 'Forearm Stretch',
        description:
          'Turn your hand backwards so that your palm is facing up. Press your fingers against the ground. Repeat for both arms. (30 secs)',
      },
      {
        step: '6',
        name: 'Sit-Up',
        description:
          'Lie on the floor on an exercise mat with your your hands behind your head and your legs bent. Your feet should be planted firmly on the floor, shoulder width apart. This is your starting position. Using just your abdominals, exhale as you raise the upper half of your body straight into a sitting position while keeping your legs stationary. Hold for a moment and then inhale as you slowly lower your body back to the starting position. Repeat 15 times',
      },
      {
        step: '7',
        name: 'Air Bicycle',
        description:
          'Lie on your back on an exercise mat, keeping your lower back pressed against the mat. Gently support your neck by bracing your hands against the back of your head. Lift your upper body off the mat while bringing your knees to up above your torso and keeping your legs parallel to the floor. Extend your right leg straight out without letting it touch the floor. Keep your left knee bent and your left leg parallel to the floor. Using your abdominals, crunch upwards and sideways, extending your right elbow to your left knee.Alternating elbows and knees, now extend your left leg while bringing your right knee toward your torso (similar to riding a bicycle), and crunch sideways so that your left elbow extends toward your right knee. Repeat 15 times',
      },
      {
        step: '8',
        name: 'Oblique Crunch',
        description:
          'Lie on your left side on an exercise mat with your knees slightly bent. Place your left hand on your abdominals and your right hand against the right side of your head. While breathing out, raise your shoulders off the ground, crunching your obliques by bringing your elbow toward your hip. Hold in the crunch position for a few counts and then slowly lower yourself back down to the exercise mat while breathing in. Switch sides. Repeat 15 times',
      },
      {
        step: '9',
        name: 'Candle Stick Dipper',
        description:
          'Get down on your knees with your torso upright. Next, extend your left leg out to the side and plant your foot on the ground with toes pointing forward. Be sure your leg is straight. Next, bring your hands together over your head so that your upper arms are squeezing against your head. This is the starting position. Begin exercise by bending sideways at your hips and lowering your torso down the right as far as you can. You should feel a nice tight stretch in your obliques. Repeat 15 times',
      },
      {
        step: '10',
        name: 'Push-Up',
        description:
          'Lie on an exercise floor mat, face down. Press your toes against the floor and place your hands flat on the ground shoulder width apart, fingers extended forward. Push yourself up so that your arms are nearly extended and your torso and legs are off the floor. This is your starting position. Inhaling, bend your arms to lower your body and touch your chest nearly to the floor. Exhaling, contract your chest as you push off the ground and return to the starting position. Repeat 15 times.',
      },
      {
        step: '11',
        name: 'Dumbbell Fly',
        description:
          "Start by lying down on a flat bench. Hold a dumbbell in each hand, resting the weight on the top of your thighs. (If you don't have a dumbbell, you can use something like a waterbottle.)Your palms will be facing each other. Lift the dumbbells one at at time. Hold the dumbbells in front of you, shoulder width apart. The palms of your hands should be facing each other. Lift the dumbbells as if you were pressing them; stop and hold the weight before you lock out. This is the starting position. Bend your elbows slightly and lower your arms at both sides using a wide arc. Keep lowering your arms until you feel a stretch on your chest. Inhale as you do so. Bring your arms back to the starting position, using the same arc of motion as you did to lower the weights. Repeat 15 times.",
      },
      {
        step: '12',
        name: 'Cooldown',
        description:
          'Repeat the stretches you did in the beginning of the workout: arm circles, shoulder stretches, seal stretches, tricep stretches, and forearm stretches. Hold each stretch for 30 seconds and do it for both arms.',
      },
    ],
  },
  {
    id: '08',
    category: 'Core Workout',
    name: 'Intermediate Core Workout',
    image1:
      'https://firebasestorage.googleapis.com/v0/b/exercise-app-c0408.appspot.com/o/intermediate_core.png?alt=media&token=e206f034-d31e-4848-ac96-f8e5d0c33150',
    image2: require('./assets/logo.png'),
    duration: '30 - 45 mins',
    level: 'Intermediate',
    description: [
      {
        step: '1',
        name: 'Seal Stretch',
        description:
          'Lay down on your stomach and keep your palms on the floor and push yourself up.  (30 secs)',
      },
      {
        step: '2 ',
        name: 'Arm Circles',
        description:
          'Rotate your arms forward  and then rotate your arms backward. Put your arm across your chest and pull with your other arm. Repeat for both arms.(30 secs)',
        image: '',
      },
      {
        step: '3',
        name: 'Shoulder Stretch',
        description:
          'Put your arm across your chest and pull with your other arm. Repeat for both arms. (30 secs)',
        image: '',
      },
      {
        step: '4',
        name: 'Tricep Stretch',
        description:
          'Put your arm behind your head and pull with your other arm. Repeat for both arms. (30 secs)',
      },
      {
        step: '5',
        name: 'Forearm Stretch',
        description:
          'Turn your hand backwards so that your palm is facing up. Press your fingers against the ground. Repeat for both arms. (30 secs)',
      },
      {
        step: '6',
        name: 'Plank',
        description:
          'Assume a standard push-up position. Except instead of resting your weight on your hands, place your elbows and forearms flat on the floor. Begin exercise by raising hips so that your entire body from your heels to your head is in a straight line. Hold this position for at least 30 seconds. Brace your core as if you were about to be punched in the gut and breath deeply throughout.',
      },
      {
        step: '7',
        name: 'Lying Leg Raise',
        description:
          'Lay down with your back flat on the floor, feet straight out and together and your hands on your side. While keep your legs as straight as you can lift your feet up in the air between 6-12 inches. You can either hold for designated period of time or you can raise them up and then lower them right back down.Repeat 15 times',
      },
      {
        step: '8',
        name: 'Side Plank',
        description:
          'Lie down with your left side on an exercise mat. Place your feet together on top of each other. Next, prop yourself up on your left elbow and forearm. Begin exercise by raising your hips so that your body forms a straight line from your ankles to your shoulders. Place your right hand on your right hip. Hold this position for 30 secs. Lower down and repeat on right side.',
      },
      {
        step: '9',
        name: 'Side Plank Jackknife',
        description:
          'Assume a side plank position on your hands with feet stacked. Next, raise the top leg up so that it is about 12 inches apart from the bottom foot. Next, raise your arm above your head. This is the starting position. Begin exercise by bringing your top foot and hand together out in front of your body, while maintaining the side plank position. Return to starting position. Repeat 15 times',
      },
      {
        step: '10',
        name: 'Decline Push-Up',
        description:
          'Place your feet on a bench or a raised platform and get into the push-up position with your hands slightly wider than shoulder-width apart. With your feet on the bench and your arms holding your body up, begin exercise by lowering yourself down to the ground while keeping your entire body in a straight line. Lower your chest as close to the ground as you can, pause, then push yourself back up to starting position. Repeat 15 times.',
      },
      {
        step: '11',
        name: 'Clap Push-Up',
        description:
          'Assume a standard push-up position with your hands outside shoulders and feet hip-width apart. Begin exercise by bending elbows and lowering chest down to the ground, pause, then explode off the ground, pushing as hard as you can so that your hands come off the floor. Immediately clap your hands together quickly in the air. Once your hands hit the ground drop chest back down to the ground and explode back up.  Repeat 15 times.',
      },
      {
        step: '12',
        name: 'Cooldown',
        description:
          'Repeat the stretches you did in the beginning of the workout: arm circles, shoulder stretches, seal stretches, tricep stretches, and forearm stretches. Hold each stretch for 30 seconds and do it for both arms.',
      },
    ],
  },
  {
    id: '09',
    category: 'Core Workout',
    name: 'Advanced Core Workout',
    image1:
      'https://firebasestorage.googleapis.com/v0/b/exercise-app-c0408.appspot.com/o/advanced_core.png?alt=media&token=e0401a9a-f779-4bd0-8c5b-b5e5e23d44ba',
    image2: require('./assets/logo.png'),
    duration: '30 - 45 mins',
    level: 'Advanced',
    description: [
      {
        step: '1',
        name: 'Seal Stretch',
        description:
          'Lay down on your stomach and keep your palms on the floor and push yourself up.  (30 secs)',
      },
      {
        step: '2 ',
        name: 'Arm Circles',
        description:
          'Rotate your arms forward  and then rotate your arms backward. Put your arm across your chest and pull with your other arm. Repeat for both arms.(30 secs)',
        image: '',
      },
      {
        step: '3',
        name: 'Shoulder Stretch',
        description:
          'Put your arm across your chest and pull with your other arm. Repeat for both arms. (30 secs)',
        image: '',
      },
      {
        step: '4',
        name: 'Tricep Stretch',
        description:
          'Put your arm behind your head and pull with your other arm. Repeat for both arms. (30 secs)',
      },
      {
        step: '5',
        name: 'Forearm Stretch',
        description:
          'Turn your hand backwards so that your palm is facing up. Press your fingers against the ground. Repeat for both arms. (30 secs)',
      },
      {
        step: '6',
        name: 'Teaser',
        description:
          'Lay down on your back and place your arm down by your side. Bring your legs up to table top position (knees bent at a 90 degree angle) and your arms up over your head, arms straight. Straighten your legs out so that they are at an angle up and away from your body. Bring your arms out in front of you and sit up. Bring your arms up over your head and then lay back. Repeat 15 times',
      },
      {
        step: '7',
        name: 'Rolling Side Plank Star',
        description:
          'Assume a standard plank position. Begin exercise by raising your left hand and right leg up so that they are in line with your body. Next, place your right foot back down on the ground and begin to roll onto your right hand and right foot. At this point you should be in star a plank. Hold for a few seconds.Repeat 15 times',
      },
      {
        step: '8',
        name: 'Spiderman Plank',
        description:
          'Assume a standard push-up position. Begin exercise by bringing your left knee to your left elbow. Return to starting position and repeat with the right side. Repeat 15 times.',
      },
      {
        step: '9',
        name: 'Plyometric Side Plank',
        description:
          'Lie with your left side on a mat. Place feet on top of each other and prop your body up on your elbow and forearm of your left arm. Place your right hand on your hip, and raise hips so that your body forms a straight line from ankles to head. This is a traditional side plank. Next, while holding yourself up in the side plank position, raise your right leg up slightly and move it forward and back for 30 seconds. Repeat on the right side',
      },
      {
        step: '10',
        name: 'Plyometric Push-Up',
        description:
          'Assume a standard push-up position with your hands shoulder with apart. Hands should be position under your shoulders on the floor. Begin exercise by bending at the elbows and lowering your body to the ground, while keeping your body in a straight line. Next, explode up from the down position and push yourself off the ground so that your hands leave the floor. Drop back down onto your hands and immediately lower back down into the next push-up.Repeat 15 times.',
      },
      {
        step: '11',
        name: 'Spiderman Push-Up',
        description:
          'Assume a standard push-up position with legs straight, hands below shoulders on the ground and arms straight.. Begin to lower body down by bending at the elbows, as you lower down lift your right foot off the ground and rotate your leg so that your knee is bent and the inside of your leg is facing the ground. Then raise your knee to your elbow all in one motion. Push back up and reverse leg movement back to starting position.  Repeat 15 times.',
      },
      {
        step: '12',
        name: 'Cooldown',
        description:
          'Repeat the stretches you did in the beginning of the workout: arm circles, shoulder stretches, seal stretches, tricep stretches, and forearm stretches. Hold each stretch for 30 seconds and do it for both arms.',
      },
    ],
  },
];
export default workouts;
