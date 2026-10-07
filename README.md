# Web Development Project 3 - *Pitch Quiz*

Submitted by: **Paul Piotrowski**

This web app: **soccer flashcards where you guess the answer, then move through the deck in order**

Time spent: **1** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The user can submit a guess into an input box before seeing the flipside of a card**
  - [x] Application features a clearly labeled input box with a submit button where users can type in a guess
  - [x] Clicking on the submit button with an incorrect answer shows visual feedback that it is wrong
  - [x] Clicking on the submit button with a correct answer shows visual feedback that it is correct
- [x] **The user can navigate through an ordered list of cards**
  - [x] A forward/next button displayed on the card navigates to the next card in a set sequence when clicked
  - [x] A previous/back button displayed on the card returns to the previous card in the set sequence when clicked
  - [x] Both the next and back buttons should have some visual indication that the user is at the beginning or end of the list (for example, graying out and no longer being available to click), not allowing for wrap-around navigation

The following **optional** features are implemented:

- [x] Users can use a shuffle button to randomize the order of the cards
  - [x] Cards should remain in the same sequence (NOT randomized) unless the shuffle button is clicked
  - [x] Cards should change to a random sequence once the shuffle button is clicked
- [x] A user’s answer may be counted as correct even when it is slightly different from the target answer
  - Examples: ignoring uppercase/lowercase discrepancies, ignoring punctuation discrepancies, matching only for a particular part of the answer rather than the whole answer
- [x] A counter displays the user’s current and longest streak of correct responses
  - [x] A current counter increments when a user guesses an answer correctly
  - [x] The current counter resets to 0 when a user guesses an answer incorrectly
  - [x] A separate counter tracks the longest streak, updating if the value of the current streak counter exceeds the value of the longest streak counter
- [x] A user can mark a card that they have mastered and have it removed from the pool of displayed cards
  - [x] The user can mark a card to indicate that it has been mastered
  - [x] Mastered cards are removed from the pool of displayed cards and added to a list of mastered cards

The following **additional** features are implemented:

* [x] Cards include a photo and a difficulty color for Easy, Medium, and Hard.

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='http://i.imgur.com/link/to/your/gif/file.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with ...  
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

The deck starts in the order stored in the card list. Back and Next move one card at a time and turn gray when there is no card in that direction. A guess is checked after lowercasing and removing punctuation, and a short piece of the answer such as "Messi" still counts. Shuffle is the only way the order changes. Marking a card as mastered takes it out of that deck and lists it below.

## License

    Copyright 2026 Paul Piotrowski

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
