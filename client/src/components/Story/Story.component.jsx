import React, { Component } from "react";
import "./Story.css";

export default class Story extends Component {
  state = {
    stories: [
      {
        id: 0,
        title: "A reason to smile",
        text:
          "Ricardo Román was shopping with his wife at a department store in Chile in 2012 when a woman in her early 20s approached him. He didn’t recognize her, he confesses through an interpreter, but there were two good reasons: He had last seen her more than a decade earlier – and her smile had changed drastically. Román, a member of the Rotary Club of Reñaca, Chile, is the national coordinator of a  program that has helped thousands of children in Chile with cleft lips, cleft palates, and other birth defects – including this stranger who now wanted to give Román a hug. “She told me, ‘This is my Rotarian smile,’” he recalls, his voice full of emotion. “It was a very gratifying moment.” The project got its start in 1993 when San Francisco (California) Rotarians, led by Peter Lagarias and Angelo Capozzi, sponsored a medical mission that performed reconstructive surgeries in Chile. That was the beginning of Rotaplast, a program that evolved into a nonprofit organization that has since sent teams to 26 countries. In 2004, Rotarians in Chile assumed leadership of the program in their country. Over the years, Chilean doctors became more involved and eventually the program expanded to include breast reconstruction for cancer patients. “It’s a great commentary on Rotary that you’ve got people in a Spanish-speaking country and people in an English-speaking country working together to get things accomplished,” says James Lehman, a plastic surgeon who joined the Rotary Club of Fairlawn, Ohio, USA, after working with Rotarians in Chile.",
        img: "/imgs/img1.jpg"
      },
      {
        id: 1,
        title: "Creating a family",
        text:
          "Mushaho has lived in Nakivale since 2016, when he fled violence in his native Democratic Republic of Congo. After receiving death threats, he crossed into Uganda and joined a friend in the 184-square-kilometer settlement that serves as home to 89,000 people. The soft-spoken 26-year-old, who has a university degree in information technology, runs a money transfer service out of a wooden storefront that doubles as his home. Business is booming because he offers his clients – other refugees from Congo, Burundi, Somalia, Ethiopia, Eritrea, Rwanda, and South Sudan – the ability to receive money via mobile phone from family and friends outside Uganda. He also exchanges currency, and his shop is so popular that he often runs out of cash. On this day, he’s waiting for a friend to return with more money from the nearest bank, two hours away in the town of Mbarara. Sitting behind a wooden desk, armed with his transactions ledger and seven cell phones, Mushaho grows anxious. He’s not worried about missing out on commission – he’s worried about leaving his clients without any money. “I don’t like making my customers wait,” he says, looking out onto the lively street of tin-roofed stores, women selling tomatoes and charcoal, a butcher shop displaying a leg of beef, and young men loitering on motorcycles. “There’s nobody else around who they can go to.”",
        img:
          "https://www.rotary.org/sites/default/files/styles/w_2160/public/Hero_FINAL.jpg?itok=A0f3NT6N"
      },
      {
        id: 2,
        title: "Final exam",
        text:
          "In the summer of 2016, Wes Clanton was looking for something to do. Which, if you knew him – and knew his crowded schedule – might have come as a surprise. An officer in the merchant marine, Clanton was already spending six months a year – 60 days on and 60 days off – crisscrossing the Pacific Ocean on a cargo ship. He was also in graduate school, working toward an advanced degree in marine transportation management – “basically,” he says, “like an MBA for boat driving.” But an important aspect of Clanton’s life was miss When he was a child, his parents had, as he puts it, “done mission trips,” and they had instilled in him the same passion to give back to his community, be it locally or on a global scale. That’s one of the reasons he joined Rotary. “What appealed to me was the service aspect,” he explains. “I was looking to do something that was greater than myself.” (At the time, Clanton was a member of the Rotary E-Club of District 5010, Alaska-Yukon; he has since transitioned into the Rotary Club of Nashville, Tennessee, USA.) Nonetheless, he wanted to do more. “I was looking for an opportunity to volunteer, for a larger project that I could work on,” he recalls. That’s when a friend told Clanton about ShelterBox.Founded by a Rotary member in the United Kingdom in 2000, ShelterBox responds to natural and manmade disasters, providing temporary shelter and other essential nonfood aid to displaced people around the world. In 2004, after a tsunami left more than 200,000 dead in a dozen Asian countries, ShelterBox was there. As it was after the 2010 earthquake in Haiti and after Typhoon Haiyan devastated the Philippines three years later. More recently, ShelterBox assisted survivors of hurricanes in the Caribbean, displaced families in Bangladesh and Syria, and war-ravaged communities in Iraq. Not knowing what to expect, Clanton, now 33, decided to try to join the exclusive ShelterBox Response Team (SRT), which annually expects two three-week deployments from each of its 163 rigorously trained volunteers, about 20 percent of whom are Rotary members.  “From the first time I heard about it, it seemed like a great fit with my work schedule and my interests,” Clanton says. “I knew this was something I could do long term and utilize my time off.” The demanding yearlong process of finding a spot with the SRT began in December 2016 when, after an online test, a lengthy application form showed up in Clanton’s email. “I thought, ‘This is absolutely insane,’” he recalls. “The demands of the application were mind-blowing. I’m all about volunteering and spending a lot of time doing it, but I didn’t know if this was it.”But for Clanton, the challenge turned out to be part of the allure. He completed the application and, in the ensuing months, took the steps that would lead him closer to becoming a ShelterBox responder. “There’s a decent amount of work that has to be done,” he says. “Turning things in and lots of reading and watching videos and things like that. In combination with my job and grad school, getting all that stuff done was kind of overwhelming.”About 350 candidates began the process along with Clanton. Eleven months later, ShelterBox invited only 20 of them to Cornwall, England, where a no-nonsense trainer announced, “This is your final exam.” One of those 20 was Wes Clanton.",
        img: "/imgs/img3.jpg"
      }
    ]
  };

  componentDidMount() {
    document.body.style.overflow = "auto";
  }

  render() {
    const id = this.props.match.params.id;

    return (
      <div className="story">
        <h1 className="title">{this.state.stories[id].title}</h1>
        <img className="img1" src={this.state.stories[id].img} alt="" />
        <p className="text">{this.state.stories[id].text}</p>
      </div>
    );
  }
}
