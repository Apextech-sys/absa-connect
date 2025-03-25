import React from 'react';
import LegalPageLayout from '../components/LegalPageLayout';

const AcceptableUsePolicy = () => {
  const sections = [
    {
      id: 'introduction',
      title: 'Introduction',
      content: (
        <div className="space-y-4 text-gray-600">
          <p>Welcome to the Wondernet Pty Ltd Internet Service Provider (ISP) Acceptable Use Policy (AUP) document. Please ensure that you read and understand this document in its entirety before using or accessing any of our Wondernet Pty Ltd services. This document is available in both a digital (online) format and in a printable PDF format for your convenience below.</p>
        </div>
      )
    },
    {
      id: 'purpose',
      title: '1. Purpose',
      content: (
        <div className="space-y-4 text-gray-600">
          <p>The purpose of this AUP is to comply with the relevant laws of South Africa; to specify to customers and users of our service/website what activities and online behaviour are considered an unacceptable use of the service/website; to protect the integrity of the Wondernet Pty Ltd network and to specify the consequences that may flow from undertaking such prohibited activities.</p>
        </div>
      )
    },
    {
      id: 'general-notice',
      title: '2. General Notice',
      content: (
        <div className="space-y-4 text-gray-600">
          <p>2.1 By accessing this website, or by contracting with Wondernet Pty Ltd for service, the User agrees, without limitation or qualification, to be bound by this policy and the terms and conditions it contains, as well as any other additional terms, conditions, rulers or policies which are displayed to you in connection with this service/website;</p>
          <p>2.2 Wondernet Pty Ltd has the right to monitor the use of its network and resources and through this policy reserves the right to bar or restrict access to its network or resources by any person or entity that may violate, contravene or abuse this policy;</p>
          <p>2.3 This AUP is set to prohibit the User from utilize the network in an improper or abusive manner and to provide enforcement and penalty mechanisms, where there are violations.</p>
          <p>2.4 This document contains a number of legal obligations which you are presumed to be familiar with. Wondernet Pty Ltd encourages you to read this document thoroughly and direct any queries to support@wondernet.co.za or Tel: 087 828 0000;</p>
          <p>2.5 This AUP forms part of Wondernet Pty Ltd's Standard Terms and Conditions of Service.</p>
        </div>
      )
    },
    {
      id: 'conditions-of-usage',
      title: '3. Conditions of Usage',
      content: (
        <div className="space-y-4 text-gray-600">
          <p>3.1 Wondernet Pty Ltd respects the rights of our customers and users of our services to freedom of speech and expression; access to information; privacy; human dignity; religion, belief and opinion in accordance with the constitution.</p>
          <p>3.2 Wondernet Pty Ltd undertakes not to interfere with any of those rights unless required to do so by law; unless those rights are exercised of those rights threatens to cause harm to another person or affect the integrity of Wondernet Pty Ltd's network;</p>
          <p>3.3 The User acknowledge that Wondernet Pty Ltd is unable to exercise control over the data passing over Wondernet Pty Ltd's infrastructure and related resources, including but not limited to any websites, electronic mail transmissions, news groups or other material created or accessible over its infrastructure. As such, Wondernet Pty Ltd is not responsible for data transmitted over its infrastructure;</p>
          <p>3.4 Wondernet Pty Ltd will take all necessary action against any contravention in order to protect the integrity of the network or any of Wondernet Pty Ltd's resources.</p>
          <p>3.5 All users are notified that Wondernet Pty Ltd is legally obliged to assist any Law Enforcement Agency to provide access to and assist in the investigation and prosecution of an offence, under a legal directive</p>
          <p>3.6 As Wondernet Pty Ltd's network and related resources may be used to link into other network anywhere in the world, the User agrees to conform to and is bound by the AUPs of such other networks;</p>
          <p>3.7 Where any user resides outside of the South Africa, permanently or temporarily, such will be subject to the laws of the country in which s/he is currently resident and which apply. On legal assistance, Wondernet Pty Ltd will assist foreign law enforcement agencies (LEA) in the investigation and prosecution of a crime committed using Wondernet Pty Ltd's network and related resources, including the provisioning of all identifiable data.</p>
        </div>
      )
    },
    {
      id: 'unlawful-use',
      title: '4. Unlawful Use of the Network and Related Resources',
      content: (
        <div className="space-y-4 text-gray-600">
          <p>4.1 Wondernet Pty Ltd's network, service or resources may only be used for lawful purposes an activities. Wondernet Pty Ltd prohibits the use of its network, services or resources including the transmission, storage and distribution of any material or content using Wondernet Pty Ltd's network that violates any law or regulation of South Africa. This includes, but is not limited to:</p>
          <p>4.1.1 The creation and transmission of offensive obscene or indecent images or documents;</p>
          <p>4.1.2 The violation of domestic or international laws that prohibit any of the acts stated above including child pornography, bestiality, pornography that sexualizes rape and/or violence, hate speech and discrimination based on race, gender or religion;</p>
          <p>4.1.3 Any activity designed to defame, abuse, stalk, harass or physically threaten any individual in South Africa or beyond its borders; including any attempt to link to, transmit or otherwise distribute any inappropriate or defamatory material</p>
          <p>4.1.4 Any violence of intellectual property laws, copyright, trademark and/or trade secrets.</p>
          <p>4.1.5 Any unlawful use of any multimedia content accessed through the search facility provided by Wondernet Pty Ltd's network, or otherwise available through access to Wondernet Pty Ltd's network whether for commercial or non-commercial purposes;</p>
          <p>4.1.6 Any violence of an individual's right to privacy, including any effort to collect personal data of third parties without their consent including but not limited to phishing;</p>
          <p>4.1.7 Any fraudulent activities whatsoever, including illegal financial schemes and practices as well as any impersonations of any other person without their consent; or any attempt to enter into a transaction with Wondernet Pty Ltd on behalf of another subscriber without their consent;</p>
          <p>4.1.8 A violation of exchange control laws of South Africa;</p>
          <p>4.1.9 Any activity that results in the sale, transmission or distribution of illegal or pirated software;</p>
          <p>4.1.10 Failing to respond to a request by a recipient of unsolicited mail to be removed from any mailing or direct marketing list and continuing to send unsolicited mail following such a request for removal.</p>
        </div>
      )
    },
    {
      id: 'network-security',
      title: '5. Network Security',
      content: (
        <div className="space-y-4 text-gray-600">
          <p>5.1 Any activity whatsoever, whether intended or unintended, that threatens the functioning, security and/or integrity of Wondernet Pty Ltd's network or related resources is unacceptable and may result in criminal liability.</p>
          <p>5.2 Wondernet Pty Ltd will investigate incidents involving such violations and will co-operate with law enforcements officials/agencies if a criminal violation is suspected. Wondernet Pty Ltd reserves the right to take any steps whatsoever to prevent activities of this nature.</p>
          <p>5.3 In the interests of all users and to ensure the integrity and safety of its network, Wondernet Pty Ltd reserves the right to prevent and restrict improper or excessive usage of its network or related resources. This included, but is not limited to:</p>
          <p>5.3.1 unlawful or unauthorised access to the network that may in any way compromise the security of the network, including unauthorised access to or use of data, systems or networks;</p>
          <p>5.3.2 circumventing any authentication or security measure of any host, device, network or account ("hacking or cracking");</p>
          <p>5.3.3 forging any TCP-IP packet header ("spoofing") or any part of the header information in an email or newsgroup posting;</p>
          <p>5.3.4 Any unsolicited mass mailing activity including direct marketing; spam and chain letters for commercial or other purposes, without the express consent of the recipients of those mails;</p>
          <p>5.3.5 Any interference with service to any user, device, host or network including, without limitation, mail bombing, flooding, deliberate attempts to overload as system and broadcast attacks.</p>
          <p>5.3.6 Any attempt to access use through another user without the consent of the said user or attempt to gain access to another person's computer, software of data without the knowledge and express consent of such person;</p>
          <p>5.3.7 Any activity which threatens to disrupt the service offered by Wondernet Pty Ltd through "denial of service attacks"; flooding of a network, or overloading a service or any unauthorised probes ("scanning" or "nuking") of other's networks or improper seizing and abuse of operator privileges ("takeovers");</p>
          <p>5.3.8 Unlawfully monitoring any information, traffic or data of any user, host, account without the express, written authorisation of Wondernet Pty Ltd;</p>
          <p>5.3.9 Any activity which in any way threatens the security of the network by knowingly posting, transmitting, linking of or otherwise distributing any information or software which contains a virus; Trojan horse; worm; lock; mail bomb, cancelbot or other harmful, destructive or disruptive component.</p>
          <p>5.4 All references to networks, related resources and systems under the section includes the Internet (and all those systems and/or networks to which the User is granted access through Wondernet Pty Ltd) and includes but is not limited to the network and infrastructure of Wondernet Pty Ltd itself.</p>
          <p>5.5 Online activity will be subject to the available bandwidth, data storage and other limitations of the service provided, which Wondernet Pty Ltd may, from time to time, revise at its own discretion and without prior notice to the customer.</p>
        </div>
      )
    },
    {
      id: 'third-party-content',
      title: '6. Access to Third Party Content and the Public Domain',
      content: (
        <div className="space-y-4 text-gray-600">
          <p>6.1 The User acknowledges that Wondernet Pty Ltd is unable to control the content of the information passing over the Internet and its applications, including e-mail, chat rooms, news groups or other similar fora or the User's ability to access such content.</p>
          <p>6.2 This includes, but is not limited to, third party content contained on or accessible through the Wondernet Pty Ltd's network websites and web pages or sites displayed as search results or contained within a directory of links on the Wondernet Pty Ltd network.</p>
          <p>6.3 The User acknowledges that Wondernet Pty Ltd's network is merely a conduit or means of access and transmission. As such, Wondernet Pty Ltd cannot be held liable or responsible, directly or indirectly, for any of the abovementioned content, in any way for any loss or damage of any kind incurred as a result of, or in connection with the User's use of or reliance on, any such content.</p>
          <p>6.4 The onus is on the User to review and evaluate the content of any information, including that of chat rooms and third party websites, accessible through the Wondernet Pty Ltd network or related resources</p>
          <p>6.5 All risk associated with the access to, use of, or reliance on, such content detailed above, rests with the User.</p>
          <p>6.6 Access to public Internet spaces, such as bulletin boards, Usenet groups, chat rooms and moderated forums is entirely voluntary and at your own risk.</p>
          <p>6.7 Wondernet Pty Ltd employees do not moderate any of these services, or your communications, transmissions or use of these services. Wondernet Pty Ltd does not undertake any responsibility for any content contained therein, or for any breaches of your right to privacy that you may experience as a result of accessing third party content or the public internet.</p>
        </div>
      )
    },
    {
      id: 'spam',
      title: '7. Unsolicited, Spam and Junk Mail',
      content: (
        <div className="space-y-4 text-gray-600">
          <p>7.1 Spam and unsolicited bulk mail poses a threat to network security and is unlawful in terms of the Electronics Communications and Transaction Act 2002. Wondernet Pty Ltd reserves its rights to take any steps necessary against the User in contravention of the relevant provisions of the Act and this AUP. The following acts are explicitly prohibited:</p>
          <p>7.1.1 Sending unsolicited bulk email messages ("junk mail" or "spam") of any kind (commercial, marketing, advertising, political, religious, announcements, etc.) to any person or entity that has not consented to the receipt of such mail;</p>
          <p>7.1.2 Operating and maintaining any form or type of mailing list without the express consent/permission of all recipients listed;</p>
          <p>7.1.3 Failing to remove from the list invalid or undeliverable addresses or the names and addresses of recipients that no longer wish to receive such communication;</p>
          <p>7.1.4 Using Wondernet Pty Ltd's service to collect responses from unsolicited e-mail sent from accounts on other Internet hosts or e-mail services, that violate this AP or the UP of any other Internet service provider;</p>
          <p>7.1.5 Including Wondernet Pty Ltd's name in the header or by listing an IP address that belongs to Wondernet Pty Ltd's in any unsolicited email whether sent through Wondernet Pty Ltd's network or not;</p>
          <p>7.1.6 Failure to secure a customer's mail server against public relay as a protection to themselves and the broader Internet community.</p>
          <p>7.1.6.1 For the avoidance of doubt, public relay occurs when a mail server is accessed by a third party from another domain and utilised to deliver mails, without the authority or consent of the owner of the mail-server.</p>
          <p>7.1.6.2 Wondernet Pty Ltd reserves the right to examine User's mail servers to confirm that no mails are being sent from the mail server through public relay and the results of such checks can be made available to the User.</p>
          <p>7.1.6.3 Wondernet Pty Ltd also reserves the right to examine the mail servers of any users using Wondernet Pty Ltd's mail servers for "smarthosting" (when the User relays its mail via a Wondernet Pty Ltd mail server of its own or vice-versa) or similar services at any time to ensure that the servers are properly secured against public relay. All relay checks will be done in strict accordance with Wondernet Pty Ltd's privacy policy.</p>
          <p>7.1.7 Where relevant, Wondernet Pty Ltd reserves the right to examine incoming or outgoing mail to the extent necessary to determine if it is classified as spam.</p>
        </div>
      )
    },
    {
      id: 'privacy',
      title: '8. Privacy & Confidentiality',
      content: (
        <div className="space-y-4 text-gray-600">
          <p>Wondernet Pty Ltd respects the privacy and confidentiality of customers and users of our service in accordance with the Constitution of South Africa and related Legislation.</p>
        </div>
      )
    },
    {
      id: 'user-responsibilities',
      title: '9. Responsibilities of the User',
      content: (
        <div className="space-y-4 text-gray-600">
          <p>9.1 The User is responsible for any misuse of Wondernet Pty Ltd's service that occurs through the customer's account and the User should ensure that no third party is allowed unauthorised use of his/her account;</p>
          <p>9.2 Wondernet Pty Ltd cannot be held liable where Users access or reply to any form of unsolicited mail or spam. Engaging in such activity may result in the user being listed or added to the database of "bulk mailing list', resulting further in "spam";</p>
          <p>9.3 Wondernet Pty Ltd cannot be held responsible for any consequences whatsoever arising of the User providing unauthorised access to his/her account by a minor, including any misuse by minor or the consequences of any transactions entered into by the minor;</p>
          <p>9.4 The user is solely responsible for any business transactions or dealings that the user may engage in using the Wondernet Pty Ltd network or related resources and services to gain access to third parties, over the Internet. This includes any vendors or advertisers found on, or through Wondernet Pty Ltd's network. Wondernet Pty Ltd shall not be reliable for any charges or fees arising from such transactions where the User has made purchases by using the service.</p>
          <p>9.5 The User is obliged to ensure compliance with all custom and exchange control legislation applicable to all electronic transactions.</p>
        </div>
      )
    },
    {
      id: 'take-down',
      title: '10. Notice and Take-Down Procedures',
      content: (
        <div className="space-y-4 text-gray-600">
          <p>10.1 Wondernet Pty Ltd confirms that it has a procedure in place for the notice and take-down of illegal material.</p>
        </div>
      )
    },
    {
      id: 'complaints',
      title: '11. Complaints and Procedure',
      content: (
        <div className="space-y-4 text-gray-600">
          <p>11.1 It is the User's responsibility to be familiar with the procedure set out below.</p>
          <p>11.2 Any violation of contravention of this policy may at any time be reported to abuse@wondernet.co.za</p>
          <p>11.3 In order to enable Wondernet Pty Ltd to fully investigate the nature and cause of the complaint, the complainant is required to provide full and detailed information of the alleged misuse, abuse or contravention of this policy, in writing, including information pertaining to:</p>
          <p>11.3.1 the origin of abuse or offence, including the website, full mail headers, relevant logfile extracts etc.;</p>
          <p>11.3.2 any contact details for the source of the complaint;</p>
          <p>11.3.3 a brief explanation why the incident is considered to be an offence.</p>
          <p>11.4 Wondernet Pty Ltd discourages anonymous complaints and urges complainants to supply their name and contact details. Such information will not be released, except where required by law enforcement. Anonymous complaints will however be acted upon as long as sufficient detail as outlined above is supplied.</p>
          <p>11.5 In the event that a User is found to be non-compliant or the Users actions amount to a contravention of this policy, depending on the nature and seriousness of the contravention, any of the provisions stipulated below under clause 10.</p>
        </div>
      )
    },
    {
      id: 'contravention',
      title: '12. Contravention and Enforcement',
      content: (
        <div className="space-y-4 text-gray-600">
          <p>12.1 In the event of a violation of the AUP, Wondernet Pty Ltd shall be entitled to invoke any one of the following measures dependant on the severity of the contravention:</p>
          <p>12.1.1 In case of individual users, issue written or verbal warnings; suspend the User's account or the User's entire network and/or revoke or cancel the User's network access privileges completely;</p>
          <p>12.1.2 In case of a network, inform the user's network administrator of the incident and require the network owner to deal with the incident according to this AUP;</p>
          <p>12.1.3 Charge the offending parties for administrative costs as well as for machine and human time lost due to the incident;</p>
          <p>12.1.4 In severe cases suspend access of the user's entire network until abuse can be prevented by appropriate means;</p>
          <p>12.1.5 Assist other networks or website administrators in investigating credible suspicions of any activity listed in this AUP;</p>
          <p>12.1.6 Take such action as may be necessary to protect the integrity of the system, including, but not being limited to, system monitoring, as well as protocol management and shutting down of ports affected by viruses, worms or other malicious code.</p>
          <p>12.1.7 Implement appropriate technical mechanisms in order to prevent usage patterns that violate this AUP.</p>
          <p>12.1.8 Share information concerning the incident with other Internet access providers, or publish the information, and/or make available the users' details to law enforcement agencies;</p>
          <p>12.1.9 Institute civil or criminal proceedings.</p>
        </div>
      )
    },
    {
      id: 'interception',
      title: '13. Interception',
      content: (
        <div className="space-y-4 text-gray-600">
          <p>The User acknowledges that Wondernet Pty Ltd is lawfully required to intercept communications in accordance with the provisions of the Regulation of Interception and Provisions of Communication-related Information Act 70 of 2003 ("the Act"). Any Interception of communications shall be strictly in accordance with the requirements of the Act, as and when required under the Act.</p>
        </div>
      )
    },
    {
      id: 'reservation',
      title: '14. Reservation and Non-Waiver of Rights',
      content: (
        <div className="space-y-4 text-gray-600">
          <p>14.1 Wondernet Pty Ltd reserves the right to add, delete or modify this policy at any time, without notifications to the User, effective upon posting this notification on Wondernet Pty Ltd's website;</p>
          <p>14.2 Wondernet Pty Ltd reserves the right to take action against any individuals, entity or organisations that violate any of the prohibited activities set our herein, or engage in any illegal or unlawful activity while accessing Wondernet Pty Ltd's network and services, to the fullest extent of the law.</p>
          <p>14.3 Wondernet Pty Ltd further reserves any other abuse that is not specifically stated in this policy, but which amounts to an illegal act being committed over the Wondernet Pty Ltd network.</p>
          <p>14.4 In order to protect the integrity and safety of its network, Wondernet Pty Ltd reserves the right to suspend, revoke or terminate a user's access to the network, where such use presents a threat or may constitute damage to its property.</p>
          <p>14.5 Wondernet Pty Ltd reserves the right to suspend, revoke or cancel Wondernet Pty Ltd's services to the customer/user if the safety and integrity of Wondernet Pty Ltd's resources are placed at risk in continuing to provide service to the subscriber/user.</p>
          <p>14.6 Wondernet Pty Ltd reserves the right to remove any information or materials in whole or in part, that, in Wondernet Pty Ltd's sole discretion, is deemed to be an offense, indecent, or otherwise objectionable.</p>
          <p>14.7 Wondernet Pty Ltd does not undertake to guarantee the security of any data passing through its networks. Although Wondernet Pty Ltd will provide a "best effort" service, including regular updates on computer viruses and other threats to security of data, it is the responsibility of the communicating parties to safeguard their data, and Wondernet Pty Ltd cannot be held liable for any loss or damage arising as result of the failure to do so.</p>
          <p>14.8 Wondernet Pty Ltd does not waive its right to enforcement of this AUP at any time, or prejudice its right to take subsequent action, should Wondernet Pty Ltd fail, neglect or elect not to enforce a breach of the AUP at any time.</p>
        </div>
      )
    },
    {
      id: 'contact',
      title: 'Questions?',
      content: (
        <div className="space-y-4 text-gray-600">
          <p>Got a question about our Acceptable Use Policy (AUP)? Then please feel free to contact us at support@wondernet.co.za or our Wondernet Pty Ltd offices in Cape Town, South Africa.</p>
        </div>
      )
    }
  ];

  return <LegalPageLayout title="Acceptable Use Policy" sections={sections} />;
};

export default AcceptableUsePolicy;
