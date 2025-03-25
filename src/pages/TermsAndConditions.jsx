import React from 'react';
import LegalPageLayout from '../components/LegalPageLayout';

const TermsAndConditions = () => {
  const sections = [
    {
      id: 'acceptance',
      title: 'Acceptance of Terms',
      content: (
        <div className="space-y-4 text-gray-600">
          <p>By ordering, installing, connecting, or making use of ABSA Connect Pty Ltd's goods or services, or by indicating your acceptance of this Agreement in any other way, you agree to be bound by ABSA Connect Pty Ltd's Standard Terms as well as ABSA Connect Pty Ltd's Acceptable Use Policy and the Service Terms applicable to the good or service concerned.</p>
          <p className="font-medium mt-4">Your attention is drawn in particular to clauses rendered in bold capitals in the ABSA Connect Pty Ltd Standard Terms. What follows is a summary for your convenience and does not form part of the agreement between you and ABSA Connect Pty Ltd. It is your responsibility to read the clauses that are referred to:</p>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>You consent to a credit check (clause 6.1).</li>
            <li>You are responsible for your own actions using the services provided by Wondernet Pty Ltd (clause 8.1).</li>
            <li>You are responsible for all hardware and software required to make use of the services provided by Wondernet Pty Ltd unless otherwise agreed (clause 8.2).</li>
            <li>You agree to comply with Wondernet Pty Ltd's Acceptable Use Policy (clause 8.4).</li>
            <li>You warrant that you have the right to use any material transmitted, accessed, stored, displayed, or reproduced using the service provided by Wondernet Pty Ltd (clause 11.7).</li>
            <li>You consent to Wondernet Pty Ltd monitoring your traffic data for accounting purposes and to ensure that the Wondernet Pty Ltd system is operating properly (clause 14.1).</li>
            <li>As soon as equipment provided by Wondernet Pty Ltd leaves Wondernet Pty Ltd's possession, risk passes to you (clause 17.4).</li>
            <li>If any equipment owned by Wondernet Pty Ltd is located on premises you do not own, you must reimburse Wondernet Pty Ltd if the landlord attaches the equipment as part of a rental dispute (clause 18.3).</li>
            <li>Wondernet Pty Ltd will not be liable to you if you suffer loss as a result of your use of the services provided by Wondernet Pty Ltd or which arises from the agreement between you and Wondernet Pty Ltd (clause 19).</li>
            <li>You indemnify Wondernet Pty Ltd against any claim made against Wondernet Pty Ltd as a result of any unlawful act that you may commit, or your use of the goods or services provided by Wondernet Pty Ltd other than as allowed in this Agreement (clause 20).</li>
          </ul>
        </div>
      )
    },
    {
      id: 'parties',
      title: 'Parties',
      content: (
        <div className="space-y-4 text-gray-600">
          <div>
            <p>1.1. "Wondernet Pty Ltd" is Wondernet Pty Ltd, a company incorporated in terms of the company laws of the Republic of South Africa with registration number 2023/543324/07.</p>
            <ul className="list-disc list-inside ml-4 mt-2">
              <li>Address: 60 Civin Drive, Bedfordview, Gauteng, 1501</li>
              <li>Email: sales@wondernet.co.za</li>
            </ul>
          </div>
          <p>1.2. "The Customer" or "You" is the party described as such on any Service Order executed between you and Wondernet Pty Ltd with contact details as entered on the Service Order.</p>
        </div>
      )
    },
    {
      id: 'agreement-structure',
      title: 'How the Agreement Works',
      content: (
        <div className="space-y-4 text-gray-600">
          <p>2.1. The Goods and Services that Wondernet Pty Ltd will provide to the Customer will be described in Service Orders.</p>
          <p>2.2. This Agreement applies to all Service Orders.</p>
          <p>2.3. More details of particular Goods or Services may be contained in Service Terms.</p>
          <p>2.4. The Service Order(s), Service Terms, and this document together form the Agreement between Wondernet Pty Ltd and the Customer. If the Parties enter into a Service Level Agreement or agree to an annexure to any of these documents, these will also form part of the Agreement.</p>
          <p>2.5. If there is any conflict between any of these documents, they will be interpreted in descending order of precedence as follows: Standard Terms (this Agreement), Service Terms, Service Order, and Acceptable Use Policy, unless otherwise expressly stated in writing.</p>
          <p>2.6. The meanings of any capitalized words in this document are found under the Glossary at the end of this document.</p>
        </div>
      )
    },
    {
      id: 'service-orders',
      title: 'Service Orders',
      content: (
        <div className="space-y-4 text-gray-600">
          <p>3.1. Wondernet Pty Ltd will provide the Goods and Services to the Customer as described in Service Orders in terms of the Agreement.</p>
          <p>3.2. A Service Order may be signed in hard copy (in counterparts or not), entered into via the Wondernet Pty Ltd Website, per email, or by another method.</p>
          <p>3.3. Each Service Order (read with the other documents mentioned above) will be a separate contract between the Customer and Wondernet Pty Ltd (unless the Service Order is amended or renewed by another Service Order).</p>
          <p>3.4. The terms of one Service Order will not apply to another, unless a Service Order amends or renews an existing Service Order or adds Goods or Services to an existing Service Order.</p>
        </div>
      )
    },
    {
      id: 'term-and-renewal',
      title: 'Term of Agreement and Renewal',
      content: (
        <div className="space-y-4 text-gray-600">
          <p>4.1. The Agreement will be in force from the date on which the Customer signs or indicates acceptance of the terms of this Agreement and will continue in force for the period stated on the applicable Service Order. If the Service Order or Service Terms do not specify a time period, the Agreement will be in force for 12 months.</p>
          <p>4.2. Where the commencement of a Service is delayed, the termination date of the Agreement will be calculated from the date that the Service commenced.</p>
          <p>4.3. Unless terminated by the customer in accordance with the termination provisions of this agreement, this agreement will automatically renew on a month-to-month basis at the end of its period, subject to any changes made to the Standard Terms or Service Terms, until terminated by either party on one calendar month's notice.</p>
        </div>
      )
    },
    {
      id: 'amendment-of-terms',
      title: 'Amendment of Terms',
      content: (
        <div className="space-y-4 text-gray-600">
          <p>5.1. Wondernet Pty Ltd must give at least 30 (thirty) days' notice of an amendment, which will become effective at the beginning of the first calendar month after the notice period has expired; and</p>
          <p>5.2. The amended documents will be posted on the Wondernet Pty Ltd Website, and Wondernet Pty Ltd will as soon as possible after posting the amendments make reasonable efforts to advise the Customer of them by email. The Customer also has a duty to keep itself informed of the latest version of the above documents by accessing the Wondernet Pty Ltd Website on a regular basis.</p>
        </div>
      )
    },
    {
      id: 'specific-terms',
      title: 'Specific Terms and Conditions',
      content: (
        <div className="space-y-4 text-gray-600">
          <p>1.1. These Service Terms are entered into in terms of the Wondernet Pty Ltd Western Cape Standard Terms, which are incorporated by reference. Unless this document states otherwise, it will be subject to the Standard Terms, including the definitions and rules of interpretation contained in it.</p>
          <p>1.2. The Customer hereby appoints Wondernet Pty Ltd Western Cape to perform the Services as described in these Service Terms and the Service Order and Wondernet Pty Ltd Western Cape hereby accepts the appointment.</p>
        </div>
      )
    },
    {
      id: 'definitions',
      title: 'Definitions',
      content: (
        <div className="space-y-4">
          <div className="space-y-2 text-gray-600">
            <p>2.1. "Access Service" means an electronic communications service provisioned using fibre optic cable, which is provided, maintained and operated by an entity licensed to provide such fibre optic cables.</p>
            <p>2.2. "CPE" means customer premises equipment, which are devices provided and installed by the last-mile provider to the Customer.</p>
            <p>2.3. "Router" are devices provided and installed by Wondernet Pty Ltd Western Cape to the Customer.</p>
            <p>2.4. "Electronic Communications Network Service Provider" means the entity providing last mile connectivity over fibre optic for the customer on behalf of Wondernet Pty Ltd Western Cape; and</p>
            <p>2.5. "Premises" means the premises to which Wondernet Pty Ltd Western Cape will provide the Access Service to the Customer.</p>
          </div>
        </div>
      )
    },
    {
      id: 'description-of-service',
      title: 'Description of Service',
      content: (
        <div className="space-y-4 text-gray-600">
          <p>3.1. Wondernet Pty Ltd Western Cape will provision an Access Service as described in the Service Order on a 24 (twenty-four) hour per day basis on each and every day for the continued duration of the Service Order.</p>
          <p>3.2. Customer may make a change to the current Service by either contacting Wondernet Pty Ltd Western Cape directly or via the website self-service portal.</p>
        </div>
      )
    },
    {
      id: 'last-mile-fibre',
      title: 'Last Mile Fibre',
      content: (
        <div className="space-y-4 text-gray-600">
          <p>4.1. Wondernet Pty Ltd Western Cape must procure at its cost that a fibre optic cable is installed to the Premises and maintained by a reputable and licensed Electronic Communications Network Service Provider.</p>
          <p>4.2. The Customer acknowledges that commencement of provision of the Services will be delayed pending the installation of such fibre optic cable, which will delay will be affected by inter alia Customer availability, wayleave application delays, obtaining landlord consent and the planning and approval of the route build.</p>
          <p>4.3. While Wondernet Pty Ltd Western Cape will not charge Fees before the commencement of the Service provision, the Customer may not terminate this Agreement pending the completion of the installation of the fibre optic cable.</p>
        </div>
      )
    },
    {
      id: 'duration',
      title: 'Duration',
      content: (
        <div className="space-y-4 text-gray-600">
          <p>5.1. The Service will commence with effect from the date of activation of the Service by Wondernet Pty Ltd Western Cape and endure for an initial fixed term of twelve (12) months ("the Initial Period") unless otherwise specified by the Service Order.</p>
          <p>5.2. After the expiry of the Initial Period the Service will continue indefinitely subject to the right of either Party to terminate the Service by giving the other Party one (1) calendar months' written notice to that effect.</p>
          <p className="italic">For example: Should you require your service to be terminated end of July – we need to receive notification prior to the month of July - i.e. we would need to receive notification during the month of June - at the very latest – the last working day of June – we cannot under any circumstances terminate the service in the same month we have received the written notification.</p>
        </div>
      )
    },
    {
      id: 'fees-installation',
      title: 'Fees, Installation, Cabling and Lead Times',
      content: (
        <div className="space-y-4 text-gray-600">
          <p>6.1. Customer must pay the Fees as specified in the Service Order.</p>
          <p>6.2. The Fees will remain fixed for the Initial Period, and thereafter may be increased on one (1) calendar month's prior written notice to the Customer.</p>
          <p>6.3. In the event that the Customer terminates this Agreement during the first 12 months, other than due to the breach of Wondernet Pty Ltd Western Cape, the Customer will be liable for an early termination fee of R2 000 (two thousand Rand), payable within thirty (30) days of date of termination, to compensate Wondernet Pty Ltd Western Cape for unrecovered installation fees.</p>
          <p>6.4. Service reactivation fees will apply for all previously cancelled services that need to be reactivated after service cancellation requests have taken effect.</p>
          <p>6.5. Installation fees include cabling up to the first 30 metres from the boundary box or the nearest distribution box should you reside in an apartment block. If your installation requires additional cabling, a site survey will be done, after which you will receive a quote from the applicable last-mile provider/sub-contractor. Should you choose to proceed, you will be liable for any additional costs incurred. The additional cabling is directly payable to the applicable last-mile provider/sub-contractor.</p>
          <p>6.6. Installation lead times are a guide based on averages and can vary depending on the last-mile provider. Line activation and connection times need to be added for full turnaround estimation.</p>
        </div>
      )
    },
    {
      id: 'service-feasibility',
      title: 'Service Feasibility',
      content: (
        <div className="space-y-4 text-gray-600">
          <p>7.1. Wondernet Pty Ltd Western Cape cannot guarantee the provision of the requested Service upon the receipt of an order. Provision of the Service is subject to Wondernet Pty Ltd Western Cape confirming that it is technically feasible to do so and the absence of any force majeure event or event beyond Wondernet Pty Ltd Western Cape's reasonable control. The Customer will be formally notified after receipt of an order on whether or not the Service can be provided.</p>
          <p>7.2. If the requirements of clause 7.1 are not met, the Agreement will terminate, and no liability will attach to Wondernet Pty Ltd Western Cape for any loss suffered by the Customer as a result.</p>
        </div>
      )
    },
    {
      id: 'equipment',
      title: 'Equipment',
      content: (
        <div className="space-y-4 text-gray-600">
          <p>8.1. Further to the provisions of the Wondernet Pty Ltd Western Cape Standard Terms dealing with Equipment, the Parties expressly agree as follows:</p>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>8.1.1. Wondernet Pty Ltd Western Cape will at all times be and remain the owner of the Router, and nothing in this Agreement will be interpreted so as to confer any rights or interest in the Router to the Customer other than as the lessee of the Router.</li>
            <li>8.1.2. The Last-Mile providers will at all times be and remain the owner of the last-mile provided CPE device, and nothing in this Agreement will be interpreted so as to confer any rights or interest in the CPE to the Customer other than as the lessee of the CPE.</li>
            <li>8.1.3. On termination of this Agreement, the Customer must forthwith return the Router to Wondernet Pty Ltd Western Cape in the same condition as that in which it was delivered to the Customer, fair wear and tear excepted.</li>
            <li>8.1.4. On termination of this Agreement, the Customer must forthwith leave the Last-mile provider CPE device installed and should not remove it from the premises under any circumstances unless otherwise arranged with the last-mile provider.</li>
            <li>8.1.5. Customer will not have access to the Last-Mile Provider CPE configuration and may not change or attempt to change the CPE configuration.</li>
            <li>8.1.6. Customer accepts liability for any costs incurred by Wondernet Pty Ltd Western Cape as a result of repair or replacement of both the router as well as last-mile CPE device where the Equipment failure was caused by Customer's misuse of the Equipment or breach of the Standard Terms or Service Terms.</li>
            <li>8.1.7. In the event that there is a breakdown or malfunction of the Router, Wondernet Pty Ltd Western Cape will at its own cost effect repairs in accordance with the manufacturers' specifications.</li>
            <li>8.1.8. The Customer will be responsible for any relocation of the last-mile CPE device but must give Wondernet Pty Ltd Western Cape reasonable written notice prior to relocating any CPE.</li>
          </ul>
        </div>
      )
    },
    {
      id: 'resale',
      title: 'Resale',
      content: (
        <div className="space-y-4 text-gray-600">
          <p>9.1. Resale of the Service is not permitted.</p>
        </div>
      )
    },
    {
      id: 'cancellation-of-pre-existing-services',
      title: 'Cancellation of Pre-existing Services',
      content: (
        <div className="space-y-4 text-gray-600">
          <p>10.1. Cancellation of pre-existing services is the Customer's responsibility and Wondernet Pty Ltd Western Cape cannot delay provision of its Service or billing due to the existing service provider's termination notice period or other termination requirements.</p>
          <p>10.2. Wondernet Pty Ltd Western Cape will advise of the forecast service delivery date to the best of its ability, but timelines are estimated and Wondernet Pty Ltd Western Cape cannot be held responsible for no services due to cancellation of existing services being done prior to the Wondernet Pty Ltd Western Cape service being delivered.</p>
        </div>
      )
    },
    {
      id: 'throughput-rates',
      title: 'Throughput Rates and IP Access',
      content: (
        <div className="space-y-4 text-gray-600">
          <p>11.1. Access to, and across, the Wondernet Pty Ltd Western Cape Network is at the maximum throughput rates set forth in the Service Order. Maximum throughput rates are not guaranteed due to the nature of the Internet.</p>
          <p>11.2. IP throughput rates may also be reduced by Wondernet Pty Ltd Western Cape in accordance with its Fair Usage Policy, where applicable, a copy of which can be provided to you on request.</p>
        </div>
      )
    },
    {
      id: 'acceptable-use',
      title: 'Acceptable Use',
      content: (
        <div className="space-y-4 text-gray-600">
          <p>12.1. Use of this Service is subject to the Wondernet Pty Ltd Western Cape Acceptable Use Policy. Wondernet Pty Ltd Western Cape reserves the right to terminate Services to the Customer where there is a serious breach or repeated breaches of its AUP.</p>
        </div>
      )
    },
    {
      id: 'ftth-fair-use',
      title: 'FTTH Fair Use',
      content: (
        <div className="space-y-4 text-gray-600">
          <p>13.1. Wondernet Pty Ltd Western Cape reserves the right to apply a Fair Usage Policy or "FUP" to uncapped Broadband Services provided to Subscribers. This is done only when necessary to protect the integrity of the Wondernet Pty Ltd Western Cape Network and the experience of all uncapped users.</p>
          <p>13.2. In practise, this means that we may set a predetermined amount of data which an uncapped Subscriber can use in a set period – the FUP threshold – and restrict the speed of Subscribers who exceed this threshold during peak usage periods.</p>
          <p>13.3. FUP thresholds are specific to the line speed at which a Subscribers' Service is provided.</p>
          <p>13.4. In the rare instance when a FUP is enforced, the threshold will be dependent on the service and line speed. When a subscriber exceeds a FUP threshold, the line speed will be reduced for the remainder of a pre-determined period, until such time the usage behaviour reaches an acceptable norm.</p>
          <p>13.5. A FUP may also be triggered by unintentional or unauthorised usage of the services. For example, a users' computer or home network could become compromised by sharing passwords and be the source of criminal activity, DDOS attacks or sharing of illegal content, thereby triggering the FUP criteria.</p>
          <p>13.6. Where a subscriber exceeds an FUP threshold their line speed will be reduced by xx% for the remainder of the set period. This applies even when there is unintended or unauthorised usage of the Service.</p>
          <p>13.7. As part of its efforts to protect network integrity and shared user experience, Wondernet Pty Ltd Western Cape also reserves the rights to apply traffic shaping and port prioritisation.</p>
        </div>
      )
    },
    {
      id: 'initiation',
      title: 'Initiation',
      content: (
        <div className="space-y-4 text-gray-600">
          <p className="font-bold">6.1. THE CUSTOMER CONSENTS TO WONDENET PTY LTD CARRYING OUT A CREDIT CHECK ON THE CUSTOMER AT ANY APPLICABLE CREDIT BUREAU, AND MAY MAKE THE PROVISION OF THE GOODS OR SERVICES DEPENDENT ON ITS SATISFACTION WITH THE RESULTS.</p>
          <p>6.2. If the Customer is a juristic person, Wondernet Pty Ltd may require one or more of its officers to stand surety for the Customer's obligations under this Agreement. Even if the Agreement has commenced, Wondernet Pty Ltd may withhold providing the Services until the surety has been signed.</p>
          <p>6.3. Wondernet Pty Ltd is obliged under RICA to obtain certain information from the Customer, and Wondernet Pty Ltd may withhold or suspend providing Services until the Customer has provided the necessary information to Wondernet Pty Ltd.</p>
          <p>6.4. If the Customer has not complied with a requirement of this clause 6, Wondernet Pty Ltd may delay providing the Goods or Services until the Customer has complied. If the Customer does not comply within a reasonable period, Wondernet Pty Ltd may terminate this Agreement and will not be liable for any damage that the Customer may suffer as a result.</p>
          <p>6.5. Non-compliance with any provisions of this clause 6 shall not absolve the client from any financial obligations to Wondernet Pty Ltd in any manner whatsoever, and such obligations shall remain in full force and effect.</p>
        </div>
      )
    },
    {
      id: 'fees-payment-termination',
      title: 'Fees, Payment and Termination',
      content: (
        <div className="space-y-4 text-gray-600">
          <p>7.1. The Customer must pay the Fee set out in the Service Order for the Goods and Services, or if the Fee has been changed, that new Fee.</p>
          <p>7.2. The Customer must pay all Fees by way of debit order unless otherwise agreed.</p>
          
          <div className="mt-4">
            <p>7.3. Unless otherwise agreed in writing:</p>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>7.3.1. Billing will commence on the date that Service provision commences and thereafter invoices will be issued on the 20th of each month with payments due by no later than the invoice due date, as reflected on the invoice</li>
              <li>7.3.2. Service Fees will be payable in advance; excess usage will be payable monthly in arrears.</li>
              <li>7.3.3. Fees in respect of the procurement and installation of Equipment will be invoiced upon receipt of the applicable Service Order and must be paid before Wondernet Pty Ltd will provide the Equipment and/or Service.</li>
              <li>7.3.4. Fees in respect of ad hoc Services will be in advance prior to services rendered</li>
              <li>7.3.5. If the Customer is to pay Fees in arrears by arrangement, these will be invoiced monthly in arrears and must be paid by the due date as indicated on the invoice</li>
              <li>7.3.6. If the Customer is to pay Fees on a prepaid basis, payment will be made as set out in clause 7.4.</li>
              <li>7.3.7. All amounts payable are quoted exclusive of VAT, unless otherwise specified.</li>
            </ul>
          </div>

          <div className="mt-4">
            <p>7.4. If the Customer is to pay Fees on a prepaid basis the following will apply:</p>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>7.4.1. Payment for the Services must be made to Wondernet Pty Ltd in advance and credited to the Customer's account with Wondernet Pty Ltd.</li>
              <li>7.4.2. Fees will be deducted from the Customer's account with Wondernet Pty Ltd on a declining-balance basis.</li>
              <li>7.4.3. If the balance in the Customer's account with Wondernet Pty Ltd reaches zero, the Services will be suspended until the Customer has credited its account appropriately.</li>
              <li>7.4.4. Credit in the Customer's account will be valid for a period of 6 (six) months from the date of payment, after which the Customer's credit account will no longer be valid and can only be paid to the Customer on written request by the Customer within the validity period of six (6) months.</li>
              <li>7.4.5. Credit in the Customer's account will not accrue any interest for the benefit of the Customer.</li>
              <li>7.4.6. Wondernet Pty Ltd may from time to time by publication on the Wondernet Pty Ltd Website set a minimum balance for the Prepaid Account (failing which the minimum balance will be zero), and/or a maximum amount by which the Prepaid account may be in credit.</li>
            </ul>
          </div>

          <div className="mt-4">
            <p>7.5. Penalties will be charged on any amount that remains unpaid by the Customer beyond the due date of payment:</p>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>7.5.1 Late payments will incur a late payment penalty of 2% of the total due amount to Wondernet Pty Ltd. Late payments are any payments not cleared into the bank account of Wondernet Pty Ltd by the invoice due date.</li>
              <li>7.5.2 Insufficient funds, returned debit orders as unpaid, and reversed debit orders and any similar unpaid automated transaction, will attract a 2% penalty fee of the total due amount to Wondernet Pty Ltd.</li>
              <li>7.5.3 Any amounts owing for more than 30 (thirty) days will incur interest at a rate of 2% above prime interest rate calculated daily on the total amount owing to Wondernet Pty Ltd</li>
              <li>7.5.4 A suspension fee of R30.00 inclusive of VAT will apply to the customer's account when suspension has taken place.</li>
              <li>7.5.5 Any customer who fails to pay on the due date on 2 (two) or more occasions may have their services terminated at Wondernet Pty Ltd's sole discretion, and in this event will be liable for all costs incurred in doing so, including but not limited to all upfront costs incurred by Wondernet Pty Ltd in the provisioning and installation of the services.</li>
            </ul>
          </div>

          <p>7.6. Wondernet Pty Ltd may suspend providing Services for which any amount is outstanding on 5 (five) Days notice to the Customer. If a Service is suspended for any reason, the Customer will still have to make payment of further Fees for that Service or any other amounts due to Wondernet Pty Ltd.</p>
          <p>7.7. If a particular Service is provided by calendar month, and the commencement date for that Service is not the beginning of a calendar month, the Fee for that first month will be reduced proportionately.</p>
          <p>7.8. Wondernet Pty Ltd may decrease the Fees charged for Services at any time and will increase Fees from time to time. If the Agreement is for an indefinite period, then:</p>
          <ul className="list-disc list-inside ml-4">
            <li>7.8.1. Wondernet Pty Ltd must give at least 30 (thirty) days' notice of a price increase, which will become effective at the beginning of the next billing cycle after the notice period has expired;</li>
          </ul>
          <p>7.9. If Wondernet Pty Ltd agrees to perform any task that is not listed in a Service Order, then the Customer must reimburse Wondernet Pty Ltd for all reasonable expenses that are necessarily and actually incurred by Wondernet Pty Ltd and Wondernet Pty Ltd's Personnel in doing so. These expenses will include but are not limited to traveling, subsistence, goods and services purchased on the Customer's behalf, communications, stationery, report and presentation material.</p>
          <p>7.10. Wondernet Pty Ltd may allocate all amounts received from the Customer as follows: firstly, towards interest and reimbursement of expenses, secondly to Fees payable for Services rendered, and thirdly to Fees payable to purchase Goods</p>

          <div className="mt-4">
            <p>7.11. Termination of services must be submitted via the Wondernet Customer Portal and are subject to the following conditions:</p>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>7.11.1 the customer does not have an outstanding balance owing to Wondernet Pty Ltd</li>
              <li>7.11.2 The customer agrees to the return of all equipment or agrees to purchase all equipment</li>
              <li>7.11.3 The customer agrees to any penalty charges that may apply to their account where an early cancellation may apply to a fixed term agreement or where Wondernet has incurred upfront costs on behalf of the customer
                <ul className="list-disc list-inside ml-8 mt-2">
                  <li>0 to 6 months: R1499.00</li>
                  <li>6 month to 12 months: R999.00</li>
                  <li>12 months onwards: R0.00</li>
                </ul>
              </li>
            </ul>
          </div>

          <p>7.12. Fixed term contracts may not be downgraded during their fixed term. To cancel a fixed term contract, the customer must either pay the remaining months of the term upfront or negotiate a rate with Wondernet for the full cost price incurred by Wondernet for the remaining term.</p>
        </div>
      )
    },
    {
      id: 'use-of-services',
      title: 'Use of Services',
      content: (
        <div className="space-y-4 text-gray-600">
          <p className="font-bold">8.1. THE CUSTOMER ACCEPTS THAT IT IS RESPONSIBLE FOR ALL OF THE CONSEQUENCES OF ITS OWN ACTIVITIES AND THOSE OF ITS EMPLOYEES, OFFICERS, AGENTS, INDEPENDENT CONTRACTORS AND ALL OTHERS UNDER ITS CONTROL WHEN USING THE SERVICES.</p>
          <p className="font-bold">8.2. THE CUSTOMER IS RESPONSIBLE FOR OBTAINING, INSTALLING AND MAINTAINING ALL HARDWARE AND SOFTWARE REQUIRED TO ACCESS THE WONDENET PTY LTD SYSTEM AND MAKE USE OF THE SERVICES, UNLESS OTHERWISE AGREED IN WRITING.</p>
          <p>8.3. The Customer must make use of the Services in a considerate and lawful way, and Wondernet Pty Ltd has developed an Acceptable Use Policy that contains reasonable rules of conduct for the use of the Service. The Acceptable Use Policy as amended is available for viewing on the Wondernet Pty Ltd Website.</p>
          <p className="font-bold">8.4. THE CUSTOMER MUST COMPLY WITH THE ACCEPTABLE USE POLICY AND ENSURE THAT ANYONE UNDER ITS CONTROL THAT USES THE SERVICES ALSO DOES SO. A BREACH OF THE ACCEPTABLE USE POLICY IS A BREACH OF THE CUSTOMER'S DUTY TO ACT IN A CONSIDERATE AND LAWFUL WAY.</p>
          <p>8.5. Network security threats evolve quickly, and behaviors change as technology changes. As a result, Wondernet Pty Ltd must be able to amend the Acceptable Use Policy at any time and reserves the right to do so. Because the Customer has a general duty to act in a considerate and lawful way, an amendment to the Acceptable Use Policy is not an amendment of this Agreement.</p>
          <p>8.6. Wondernet Pty Ltd may use upstream Suppliers in providing certain Services, which may maintain their own acceptable use policies. Wondernet Pty Ltd will inform the Customer if this is the case. The Customer agrees to abide by these policies in using the relevant Services. Wondernet Pty Ltd may treat a breach of a Supplier's acceptable use policy as if it were a breach of Wondernet Pty Ltd's Acceptable Use Policy.</p>
        </div>
      )
    },
    {
      id: 'personal-information',
      title: 'Personal Information',
      content: (
        <div className="space-y-4 text-gray-600">
          <p>9.1. In this Agreement, the terms "Data Subject", "Personal Information" and "Processing" have the meanings assigned to them in the Protection of Personal Information Act 4 of 2013.</p>
          <p>9.2. It is hereby recorded that with regard to Processing of Personal Information,</p>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>9.2.1. Wondernet Pty Ltd and the Customer are each responsible for complying with their respective obligations under applicable laws governing the processing of Personal Information.</li>
            <li>9.2.2. The Customer remains solely responsible for obtaining Data Subjects' consent for Wondernet Pty Ltd to process Personal Information for purposes consistent with providing the Services, or otherwise ensuring the lawfulness of such Processing in accordance with applicable law and warrants to Wondernet Pty Ltd that it will do so.</li>
          </ul>
          <p>9.3. It is hereby recorded that with regard to trans-border Personal Information flows:</p>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>9.3.1. The Customer warrants that it has obtained the Data Subjects' consent to Wondernet Pty Ltd transferring Personal Information across country borders for purposes consistent with providing the Services, alternatively that it is lawful for the Personal Information to be transferred in that way.</li>
            <li>9.3.2. The Customer is solely responsible for determining that any transfer of Personal Information across a country border complies with the applicable laws.</li>
          </ul>
        </div>
      )
    },
    {
      id: 'consulting-services',
      title: 'Consulting Services',
      content: (
        <div className="space-y-4 text-gray-600">
          <p>The Customer may request Wondernet Pty Ltd to provide Consulting Services to the Customer during the term of this Agreement, either on an ad-hoc basis or in terms of a Service Order. Unless otherwise agreed between the Parties in writing, Wondernet Pty Ltd will charge the Customer the Consulting Services Fee for providing these Services.</p>
        </div>
      )
    },
    {
      id: 'intellectual-property',
      title: 'Intellectual Property',
      content: (
        <div className="space-y-4 text-gray-600">
          <p>11.1. Nothing in this Agreement will be interpreted as granting either Wondernet Pty Ltd or the Customer a license to deal in any way with any Intellectual Property owned by the other, nor will anything be construed as an assignment of Intellectual Property to the other, unless otherwise agreed in writing.</p>
          
          <div className="mt-4">
            <p>11.2. If Wondernet Pty Ltd provides the Customer with Software as part of providing a Service, and it holds Intellectual Property rights to the Software, it grants the Customer a non-exclusive, nontransferable license to use that Software:</p>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>11.2.1. Only for the Customer's own purposes;</li>
              <li>11.2.2. For making use of the Services; and</li>
              <li>11.2.3. For the duration of this Agreement and subject to its terms.</li>
            </ul>
          </div>

          <p>11.3. If Wondernet Pty Ltd provides the Customer with Software owned by a third party, the Customer must comply with all license terms imposed by the third party when it uses the Software. These terms include any terms appended to a Service Order.</p>
          <p>11.4. Copyright in any Software or other works created by Wondernet Pty Ltd in terms of this Agreement will vest in Wondernet Pty Ltd. Wondernet Pty Ltd will assign all right, title, and interest to the Software or other works to the Customer as soon as reasonably possible after it has received payment in full of the related Fee, and undertakes to do all things and execute all documents required to give effect to the assignment.</p>
          <p>11.5. The Customer is specifically prohibited from reverse engineering, disassembling, decompiling, or using any method to discover the source code of any Software provided in terms of this Agreement (or attempting to do so), where the Intellectual Property is not owned by the Customer.</p>
          <p>11.6. The Customer undertakes to comply with all intellectual property laws, and to do nothing related to or connected with this Agreement or its use of the Wondernet Pty Ltd System which may infringe the Intellectual Property rights of Wondernet Pty Ltd or any third party.</p>
          <p className="font-bold">11.7. THE CUSTOMER WARRANTS THAT IT EITHER OWNS THE INTELLECTUAL PROPERTY RIGHTS TO ALL MATERIAL TRANSMITTED, ACCESSED, STORED, DISPLAYED, OR REPRODUCED USING THE WONDENET PTY LTD SYSTEM, OR THAT IT HAS THE PERMISSION OF THE OWNER OF THE MATERIAL TO MAKE USE OF THAT MATERIAL IN THAT WAY.</p>
          <p>11.8. Wondernet Pty Ltd will have the right to make copies of the Customer Data if this is necessary to provide a Service.</p>
          
          <div className="mt-4">
            <p>11.9. While providing the Services, Wondernet Pty Ltd may have one or more Internet Protocol ("IP") addresses allocated to the Customer.</p>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>11.9.1. The Customer must put the assigned IPs to the use specified or implied in the Service Order, and will not put them to another use without the express written consent of Wondernet Pty Ltd.</li>
              <li>11.9.2. The Customer acknowledges that IP addresses are not property and cannot be owned. As a result, the Customer has no right or expectation of a right to any IP address assigned to it. As a result IP addresses may change from time to time at the sole discretion of Wondernet Pty Ltd</li>
              <li>11.9.3. On termination of this Agreement or the relevant Service Order, any IP Addresses assigned to the Customer may be removed from the Customer, and the Customer will have no recourse against Wondernet Pty Ltd or any third party as a result of any loss sustained as a result.</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'security',
      title: 'Security',
      content: (
        <div className="space-y-4 text-gray-600">
          <p>12.1. Wondernet Pty Ltd will implement measures in line with Good Industry Practice to ensure the security of the Wondernet Pty Ltd System and the physical security of the Wondernet Pty Ltd Premises but gives no warranty that breaches of security will not take place.</p>
          <p>12.2. If the Customer discovers a security violation, or thinks that a security violation is imminent, it must immediately notify Wondernet Pty Ltd.</p>
          <p>12.3. If the Customer suffers damage as a result of loss or corruption of Customer Data through a security violation, it will be liable for the damage if the violation was the Customer's fault.</p>
          
          <div className="mt-4">
            <p>12.4. The Customer must not do anything that may prejudice the security of the Wondernet Pty Ltd System, and must take all reasonable measures necessary to ensure that:</p>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>12.4.1. No unlawful access is gained to the Wondernet Pty Ltd Premises or the Wondernet Pty Ltd System;</li>
              <li>12.4.2. No Malicious Code is introduced into the Wondernet Pty Ltd System;</li>
              <li>12.4.3. The Customer Data is safeguarded; and</li>
              <li>12.4.4. Any Internet Protocol ("IP") address range assigned to the Customer cannot be attacked by third parties.</li>
            </ul>
          </div>
          
          <div className="mt-4">
            <p>12.5. If a security violation occurs, or Wondernet Pty Ltd is of the view that a security violation is imminent, Wondernet Pty Ltd may take whatever steps it considers necessary to maintain the proper functioning of the Wondernet Pty Ltd System including without limitation:</p>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>12.5.1. Changing the Customer's access codes and passwords (or those of any user of the Wondernet Pty Ltd System),</li>
              <li>12.5.2. Suspending the Services, and</li>
              <li>12.5.3. Preventing access to the Wondernet Pty Ltd System.</li>
            </ul>
          </div>

          <p>12.6. Wondernet Pty Ltd takes reasonable measures to provide disaster recovery but does not warrant that recovery will be successful or that it will be completed within any time limit.</p>
          <p>12.7. The Customer must give its full cooperation to Wondernet Pty Ltd in any investigation that may be carried out by Wondernet Pty Ltd regarding a security violation.</p>
          <p>12.8. If the Customer is providing any service to third parties that makes use of the Wondernet Pty Ltd System, the Customer must contractually bind those third parties to equivalent terms regarding security as are set out in this clause 12.</p>
        </div>
      )
    },
    {
      id: 'suspension-of-service',
      title: 'Suspension of Service',
      content: (
        <div className="space-y-4 text-gray-600">
          <div>
            <p>13.1. Wondernet Pty Ltd is entitled to suspend provision of the affected Service to the Customer where:</p>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>13.1.1. The Customer's pre-paid account balance falls below the minimum balance described in clause 7.4.6;</li>
              <li>13.1.2. A court of competent jurisdiction so orders;</li>
              <li>13.1.3. Wondernet Pty Ltd needs to carry out Emergency Maintenance;</li>
              <li>13.1.4. The Customer has not made payment as set out in section 7;</li>
              <li>13.1.5. Where the Customer is in breach of the Acceptable Use Policy;</li>
              <li>13.1.6. Wondernet Pty Ltd becomes aware of a potential threat to the proper operation or security of the Service as described in clause 12 (Security); or</li>
              <li>13.1.7. Wondernet Pty Ltd has reasonable grounds to believe that the Services are being used fraudulently, or illegally, or in violation of the terms of this Agreement.</li>
            </ul>
          </div>

          <p>13.2. Wondernet Pty Ltd is entitled to suspend Service as set out in clause 13.1 immediately and without notice. In the case of grounds set out in clauses 13.1.5 to 13.1.7, Wondernet Pty Ltd must provide the Customer with at least 30 (thirty) days' notice of such suspension, unless the circumstances are such that immediate suspension is necessary to avoid loss to Wondernet Pty Ltd, the Customer, or any third party.</p>
          <p>13.3. The period of suspension will be that which is reasonable under the particular circumstances that gave rise to the suspension.</p>
          <p>13.4. Reconnection of any Service suspended in terms of clauses 13.1.4 and 13.1.5 will be subject to a reconnection Fee as set out in clause 7.5.4</p>
        </div>
      )
    },
    {
      id: 'data-and-content',
      title: 'Data & Content',
      content: (
        <div className="space-y-4 text-gray-600">
          <p className="font-bold">14.1. WHILE WONDENET PTY LTD RECOGNISES THE CUSTOMER'S RIGHT TO PRIVACY OF ITS DATA, THE CUSTOMER CONSENTS TO WONDENET PTY LTD MONITORING THE CUSTOMER'S TRAFFIC DATA USING THE WONDENET PTY LTD SYSTEM FOR ACCOUNTING PURPOSES AND TO ENSURE THAT THE WONDENET PTY LTD SYSTEM IS OPERATING PROPERLY.</p>
          <p>14.2. The Customer must not upload to, store on, or transmit any data or content via the Wondernet Pty Ltd System that is unlawful, harmful, or in breach of the Acceptable Use Policy.</p>
          <p>14.3. Where the Customer's use of a Service leads to the transmission of data to or from the Republic of South Africa, the Customer acknowledges that it has a duty to comply with any relevant statutory provisions dealing with data privacy either in the Republic of South Africa or in any foreign country to which the data is transmitted.</p>
          <p>14.4. Wondernet Pty Ltd has no knowledge of or interest in data that the Customer may transmit via, store on, or access from the Wondernet Pty Ltd System. Wondernet Pty Ltd also has no duty to monitor any content made available or published through the Wondernet Pty Ltd System, unless required under clause 15 (Statutory Compliance).</p>
        </div>
      )
    },
    {
      id: 'statutory-compliance',
      title: 'Statutory Compliance',
      content: (
        <div className="space-y-4 text-gray-600">
          <div>
            <p>15.1. Wondernet Pty Ltd is obliged to comply with certain statutory provisions including, but not limited to, those set out in the following Acts (and their associated regulations):</p>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>15.1.1. The Films and Publications Act 65 of 1996;</li>
              <li>15.1.2. The Electronic Communications and Transactions Act 25 of 2002;</li>
              <li>15.1.3. The Regulation of Interception of Communications and Provision of Communication-related Information Act (Act 70 of 2002), and</li>
              <li>15.1.4. The Electronic Communications Act 36 of 2005.</li>
            </ul>
          </div>

          <p>15.2. Wondernet Pty Ltd's compliance with these statutory provisions may require measures that would otherwise be infringements of the Customer's privacy, such as interception of the Customer's communications or the examination of Customer Data. No action will lie against Wondernet Pty Ltd for any damages that the Customer may suffer as a result of these measures.</p>
        </div>
      )
    },
    {
      id: 'loss-of-license',
      title: 'Loss of License',
      content: (
        <div className="space-y-4 text-gray-600">
          <p>16.1. If Wondernet Pty Ltd cannot continue with provision of any Service because any license, permit, certificate consent, exemption, or other necessary legal requirement is withdrawn, Wondernet Pty Ltd must make best endeavors to provide an alternative service to the Customer within 10 (ten) Business Days. It may do this either by utilizing another of its own services, or by having a Supplier or third party provide the Service in its place.</p>
          <p>16.2. If the Customer is not satisfied with the steps taken by Wondernet Pty Ltd in clause 16.1, Wondernet Pty Ltd must cease provision of the Service in question and reduce the Fee accordingly.</p>
          <p>16.3. If Wondernet Pty Ltd cannot provide the other Services provided under this Agreement because they depend upon a Service that has been terminated in terms of clause 16.2, the Customer may terminate this Agreement.</p>
          <p>16.4. Wondernet Pty Ltd must provide the Customer with timely notice of the circumstances described in clause 16.1 if reasonably possible.</p>
        </div>
      )
    },
    {
      id: 'risk-and-ownership',
      title: 'Risk and Ownership in Equipment',
      content: (
        <div className="space-y-4 text-gray-600">
          <p>17.1. Ownership of all Equipment is retained by Wondernet Pty Ltd (or the supplier of the Equipment as the case may be) and nothing in this Agreement must be interpreted as creating any expectation with regard to the transfer of ownership to the Customer.</p>
          <p>17.2. The Customer may purchase Equipment only by agreeing to do so in writing in a Service Order or by way of a separate agreement, in which case ownership in the Equipment will pass to the Customer only once payment has been made for it in full.</p>
          <p>17.3. Delivery of Equipment will take place when Wondernet Pty Ltd passes possession of the Equipment to the Customer, its Freight Forwarder, or a third party nominated by the Customer, or when Wondernet Pty Ltd delivers it to any location indicated in writing by the Customer where the Equipment is not under the control of Wondernet Pty Ltd.</p>
          <p className="font-bold">17.4. RISK IN THE EQUIPMENT WILL PASS TO THE CUSTOMER ON DELIVERY, FROM WHICH MOMENT ALL RISK OF DAMAGE AND LOSS IN THE EQUIPMENT WILL FALL ON THE CUSTOMER, WHICH MUST TAKE RELEVANT STEPS TO INSURE THE EQUIPMENT AND OTHERWISE MITIGATE ITS RISK OF LOSS THEREIN. IT IS SPECIFICALLY RECORDED THAT A DELIVERY FEE OF R250.00 INCL VAT IS CHARGED TO THE CUSTOMER FOR ALL EQUIPMENT AND MAY BE CHANGED FROM TIME TO TIME</p>
        </div>
      )
    },
    {
      id: 'use-and-maintenance',
      title: 'Use and Maintenance of Equipment',
      content: (
        <div className="space-y-4 text-gray-600">
          <p>18.1. This clause 18 applies only where the Customer is not the owner of the Equipment, but risk has passed to the Customer as described in clause 17.4, for example where Wondernet Pty Ltd has leased the Equipment to the Customer, or the Customer is paying for the Equipment in instalments.</p>
          <p>18.2. The Customer must:</p>
          <ul className="list-disc pl-8 space-y-2">
            <li>18.2.1. Ensure that the Equipment remains in a safe environment that is conducive to its continued operation;</li>
            <li>18.2.2. Ensure that the Equipment is used with care and that reasonable precautions are taken to avoid accidents and to safeguard it from loss or damage and excessive wear and tear;</li>
            <li>18.2.3. Notify Wondernet Pty Ltd immediately of any loss of, or damage to, the Equipment or part thereof or any failure of the Equipment to function;</li>
            <li>18.2.4. Ensure that no part or component for the Equipment is used which has not been supplied by Wondernet Pty Ltd or its authorised subcontractors;</li>
            <li>18.2.5. Ensure that the Equipment is insured at a reasonable value against any damage or loss;</li>
            <li>18.2.6. Not rent, sell, mortgage, or otherwise encumber the Equipment without the prior written consent of Wondernet Pty Ltd;</li>
            <li>18.2.7. Provide Wondernet Pty Ltd with all such information as it may reasonably require to protect its right of ownership in the Equipment;</li>
            <li>18.2.8. Ensure that the Equipment does not leave the Customer's possession, and no person other than its Personnel is permitted to use the Equipment without Wondernet Pty Ltd's prior written consent;</li>
            <li>18.2.9. Provide reasonable access to the Equipment by Wondernet Pty Ltd or its agents (upon request) for maintenance and/or repairs;</li>
            <li>18.2.10. Reimburse Wondernet Pty Ltd for any repairs and/or maintenance needed to the Equipment at the Time and Materials Rate, provided that the Customer authorizes the cost of such repairs and/or maintenance prior to implementation.</li>
          </ul>
          <p>18.3. Where Equipment is installed or stored on or at premises which are leased from a third party or otherwise not owned by the Customer, then the Customer undertakes to:</p>
          <ul className="list-disc pl-8 space-y-2">
            <li>18.3.1. Obtain all such consents and permissions as may be necessary to allow the installation and maintenance of the Equipment; and</li>
            <li>18.3.2. In the case of a dispute with the landlord or owner of the premises, inform the landlord or owner of the premises in writing of the fact that the Equipment is the property of Wondernet Pty Ltd and does not belong to the Customer, and inform Wondernet Pty Ltd in writing without delay in order that Wondernet Pty Ltd may take the necessary steps to assert its claim to the Equipment. The Customer specifically indemnifies and holds harmless Wondernet Pty Ltd in respect of any breach of this clause.</li>
          </ul>
          <p>18.4. Under no circumstances is the Customer permitted to authorize or carry out technical maintenance on any Equipment without the prior written permission of Wondernet Pty Ltd. Any modification or re-configuration carried out or attempted by the Customer or any third party authorized to do so by the Customer without the express prior written approval of Wondernet Pty Ltd is strictly prohibited and Wondernet Pty Ltd specifically reserves its right to claim damages should this clause be breached.</p>
          <p>18.5. Upon termination of services, the equipment must be returned to Wondernet Pty Ltd within 7 days of the service termination date. Courier charges are for the customer's account. The router is to be returned to Wondernet in good working order as was supplied to the customer.</p>
          <p>18.6. Non-Return of Equipment</p>
          <ul className="list-disc pl-8 space-y-2">
            <li>18.6.1 In the event that the customer does not return the router, a charge of R750.00 incl VAT will be due and payable by the customer to Wondernet Pty Ltd</li>
            <li>The customer may opt to purchase the router from Wondernet Pty Ltd for R500.00 incl VAT upon termination.</li>
          </ul>
        </div>
      )
    },
    {
      id: 'limitation-of-liability',
      title: 'Limitation of Liability',
      content: (
        <div className="space-y-4 text-gray-600">
          <p>19.1. For the purposes of this clause "Loss" means and includes:</p>
          <ul className="list-disc pl-8 space-y-2">
            <li>19.1.1. All losses, liabilities, and damages relating to or arising from this Agreement or the Services, howsoever arising, whether out of breach of express or implied warranty, breach of contract, misrepresentation, negligence, vicarious or strict liability, in delict or otherwise, and whether foreseen by either of the Parties or not; and</li>
            <li>19.1.2. Any legal costs (including legal fees at an attorney and own client scale and disbursements and costs of investigation, litigation, settlement, judgment, interest, and penalties) or other costs, claims, or demands.</li>
          </ul>
          <p>19.2. Wondernet Pty Ltd will not be liable to the Customer or any third party for any indirect Loss (including consequential, punitive, special, or incidental loss or damage which will include but not be limited to loss of property or loss of profit, business, goodwill, revenue, or anticipated savings).</p>
          <p>19.3. Without limiting the provisions of clause 19.2 in any way, Wondernet Pty Ltd will not be liable to the Customer for Loss arising from:</p>
          <ul className="list-disc pl-8 space-y-2">
            <li>19.3.1. Any breach of this Agreement by the Customer or any act, misrepresentation, error, or omission made by or on behalf of the Customer or the Customer's Personnel;</li>
            <li>19.3.2. The Customer's failure to put in place adequate security measures as set out in clause 12 (Security);</li>
            <li>19.3.3. The interruption, suspension, or termination of the Service(s) for whatever reason; or</li>
            <li>19.3.4. Loss arising as a result of lost data, damaged or corrupted data, or a delay in transmissions.</li>
          </ul>
          <p>19.4. Without in any way limiting or derogating from the above provisions, the Parties agree that the total amount of Wondernet Pty Ltd's liability to the Customer for Loss will not exceed the amount of the Fees paid by the Customer for the Service from which the damage arose in the 12 (twelve) month period immediately preceding the damage-causing event.</p>
        </div>
      )
    },
    {
      id: 'indemnity',
      title: 'Indemnity',
      content: (
        <div className="space-y-4 text-gray-600">
          <p className="font-bold">20.1. THE CUSTOMER WILL INDEMNIFY, DEFEND, AND HOLD WONDENET PTY LTD HARMLESS FROM ALL CLAIMS BROUGHT AGAINST WONDENET PTY LTD BY THIRD PARTIES AS A RESULT OF:</p>
          <ul className="list-disc pl-8 space-y-2">
            <li>20.1.1. The Customer's use of the Goods or Services other than as allowed in this Agreement or Acceptable Use Policy;</li>
            <li>20.1.2. Breach of privacy rights, or infringement of any law (whether South African or foreign) governing cross-border data flows by the Customer;</li>
            <li>20.1.3. The infringement of any right in Intellectual Property by the Customer, including without limitation those set out in clause 9; or</li>
            <li>20.1.4. Any other wrongful act or omission by the Customer.</li>
          </ul>
          <p>20.2. The indemnified claims will include legal costs on the scale as between attorney and own client and any additional legal costs.</p>
          <p>20.3. If the CPA is applicable to this Agreement, and any provision of this clause 20 is found by a court or tribunal with jurisdiction over Wondernet Pty Ltd to be unfair, unreasonable, or unjust, then that provision (whether it be a word, phrase, or sub-clause) will be severed, and the remainder of this clause 20 will have full force and effect.</p>
        </div>
      )
    },
    {
      id: 'warranties',
      title: 'Warranties',
      content: (
        <div className="space-y-4 text-gray-600">
          <p>21.1. Wondernet Pty Ltd warrants that:</p>
          <ul className="list-disc pl-8 space-y-2">
            <li>21.1.1. It has the facilities, infrastructure, capacity, and capability to provide the Services;</li>
            <li>21.1.2. It will employ a sufficient number of suitably trained staff to provide the Services;</li>
            <li>21.1.3. It will provide the Services:</li>
            <ul className="list-disc pl-8 space-y-2">
              <li>21.1.3.1. With promptness and diligence and in a workmanlike manner and in accordance with the practices and professional standards of well-managed companies performing services similar to the Services; and</li>
              <li>21.1.3.2. In accordance with all applicable laws and regulations.</li>
            </ul>
          </ul>
          <p>21.2. Equipment is guaranteed under the manufacturer's product-specific warranties only, and all other guarantees and warranties including common law guarantees and warranties in relation to Equipment are hereby specifically excluded by Wondernet Pty Ltd.</p>
          <p>21.3. Unless expressly set out in this clause and elsewhere in this Agreement or in any Service Level Agreement and to the maximum extent permitted by law, Wondernet Pty Ltd disclaims any representations and warranties or guarantees of any nature whatsoever in respect of the Equipment or Services, which are provided on a "reasonable effort" basis, and all warranties which are implied or residual at common law are hereby expressly excluded.</p>
          <p>21.4. For the avoidance of doubt, Wondernet Pty Ltd does not warrant any of the following:</p>
          <ul className="list-disc pl-8 space-y-2">
            <li>21.4.1. Connection quality (including throughput, availability, jitter, latency, and packet loss);</li>
            <li>21.4.2. The confidentiality, integrity, and/or availability of any Customer Data;</li>
            <li>21.4.3. The correctness of the identification of any email as spam; or</li>
            <li>21.4.4. The success of any backup or disaster recovery service offered.</li>
          </ul>
          <p>21.5. If the CPA applies to this Agreement, the provisions of this Agreement or of this clause 21 will not be interpreted in such a way as to exclude the Customer's rights under sections 54 (Right to quality service), 55 (Right to safe, good quality goods), or 56 (Implied warranty of quality) of the CPA. These sections, however, apply only to the minimum possible extent. Unless the contrary is stated elsewhere in this Agreement, the Customer will have no rights in respect of quality of service, safe & good quality goods, or implied warranty of quality beyond those explicitly stated in those sections.</p>
        </div>
      )
    },
    {
      id: 'assignment-subcontracting-reselling',
      title: 'Assignment, Subcontracting and Reselling',
      content: (
        <div className="space-y-4 text-gray-600">
          <p>22.1. Wondernet Pty Ltd reserves the right to cede, assign, delegate, or otherwise transfer the benefit or burden of all or any part of this Agreement without the prior written consent of the other Party, which consent will not be unreasonably withheld or delayed.</p>
          <p>22.2. The customer shall not be entitled to cede, assign, delegate, or otherwise transfer the benefit or burden of all or any part of this Agreement without the prior written consent of the other Party, which consent will not be unreasonably withheld or delayed.</p>
          <p>22.3. Wondernet Pty Ltd may subcontract its obligations in terms of this Agreement to a third party, provided that:</p>
          <ul className="list-disc pl-8 space-y-2">
            <li>22.3.1. Such subcontracting will not absolve Wondernet Pty Ltd from responsibility for the provision of the Service or complying with its obligations in terms of this Agreement; and</li>
            <li>22.3.2. Wondernet Pty Ltd will at all times remain the sole point of contact for the Customer.</li>
          </ul>
          <p>22.4. The Customer may not resell any Service, or otherwise provide any Service to a third party for consideration, unless agreed in writing between the Parties.</p>
        </div>
      )
    },
    {
      id: 'relationship-between-parties',
      title: 'Relationship between the Parties',
      content: (
        <div className="space-y-4 text-gray-600">
          <p>23.1. The Parties agree that the relationship between them is one of commissioner and independent contractor, and nothing in this Agreement will be construed as giving rise to a relationship of employer and employee, whether between Customer and Wondernet Pty Ltd or between Customer and any officer, employee, or agent of Wondernet Pty Ltd.</p>
          <p>23.2. This Agreement does not give rise to a relationship of principal and agent. Neither Party will be entitled to conclude any agreement on behalf of the other, nor to sign any document on behalf of the other, unless this is specifically authorized in writing by the other.</p>
          <p>23.3. Wondernet Pty Ltd's right to terminate this Agreement will be regulated by the law of contract alone and neither Wondernet Pty Ltd nor its employees, officers, or agents is "an employee" of the Customer as defined in the Labour Relations Act 66 of 1995, s1 of the Basic Conditions of Employment Act 75 of 1997, or any similar statute.</p>
          <p>23.4. The relationship between the Parties will not be an exclusive one, and both Parties will be free to enter into agreements similar to this one with third parties.</p>
          <p>23.5. Both Parties to this Agreement (including the employees, officers, and agents of the Parties) undertake to use their best endeavors and exercise good faith in implementing the provisions of this Agreement according to its intent and purpose and they further undertake to pass such resolutions and do all such acts and deeds as may be necessary, to this end.</p>
          <p>23.6. In order to facilitate the effective provision of the Services, the Customer will:</p>
          <ul className="list-disc pl-8 space-y-2">
            <li>23.6.1. Allow Wondernet Pty Ltd reasonable access to its premises in order for Wondernet Pty Ltd to provide the Services, and the Customer will procure that its employees, officers, and agents cooperate with and give Wondernet Pty Ltd any necessary assistance in the provision of the Services;</li>
            <li>23.6.2. Comply with any reasonable instructions given by Wondernet Pty Ltd relating to the provision of the Services, as well as Wondernet Pty Ltd's relevant policies and procedures, which will be made available to the Customer on request;</li>
            <li>23.6.3. Enter into any agreement with a supplier necessary to allow Wondernet Pty Ltd to provide the Services; and</li>
            <li>23.6.4. Respond to any request for information, access, or authorization as soon as reasonably possible, having regard to the circumstances of the request.</li>
          </ul>
        </div>
      )
    },
    {
      id: 'no-solicitation',
      title: 'No Solicitation',
      content: (
        <div className="space-y-4 text-gray-600">
          <p>24.1. Both Parties undertake that they will not employ any employee of the other, or any person who was an employee of the other during the previous 12 (twelve) months. This restriction applies during the term of this Agreement and for a period of 6 (six) months after its termination for any reason. "Employ" includes persuading, encouraging, or procuring the employee to be employed by or through the guilty Party or any of its subsidiaries, and by doing so directly or indirectly. The restriction also applies to inducing an employee to terminate his or her employment.</p>
          <p>24.2. The provisions of clause 24.1 do not prohibit either of the Parties from considering any application for employment submitted on an unsolicited basis or in response to a general advertisement of employment opportunities.</p>
        </div>
      )
    },
    {
      id: 'application-of-cpa',
      title: 'Application of the Consumer Protection Act',
      content: (
        <div className="space-y-4 text-gray-600">
          <p>25.1. If the Customer is a juristic person then the CPA applies to this Agreement only if both the Customer's asset value and annual turnover (the "Business Values") are less than R 2 000 000 (two million rand) (the "Threshold Value") on the date [the Agreement is entered into / the applicable Service Order is executed]. Both the Business Values and the Threshold Value may be amended in terms of the CPA.</p>
          <p>25.2. Wondernet Pty Ltd's duties under this Agreement may vary depending upon whether the CPA applies to this Agreement, and Wondernet Pty Ltd will act upon the information given by the Customer in this regard. Consequently:</p>
          <ul className="list-disc pl-8 space-y-2">
            <li>25.2.1. The Customer warrants that any statement made to Wondernet Pty Ltd in respect of its Business Values is accurate.</li>
            <li>25.2.2. If the Customer claims that all the Business Values are below the Threshold Value, or otherwise that the CPA applies to this Agreement, Wondernet Pty Ltd may at its instance require the Customer to provide it with financial statements as proof thereof.</li>
            <li>25.2.3. If the Customer misstates the Business Values (whether negligently or otherwise) in such a way that Wondernet Pty Ltd believes that this Agreement is subject to the CPA when it is not, then Wondernet Pty Ltd may retroactively apply any provisions of this Agreement that were not applied as a result of this belief.</li>
            <li>25.2.4. The Customer will be liable for any costs or damage sustained by Wondernet Pty Ltd resulting from such misstatement.</li>
          </ul>
          <p>25.3. If the CPA is applicable to this Agreement, the provisions of the CPA will be applied and take precedence where they contradict any provision of this Agreement.</p>
        </div>
      )
    },
    {
      id: 'breach-and-termination',
      title: 'Breach and Termination',
      content: (
        <div className="space-y-4 text-gray-600">
          <p>26.1. If either Party:</p>
          <ul className="list-disc pl-8 space-y-2">
            <li>26.1.1. Fails to comply with any of its obligations or commits a breach of this Agreement and fails to remedy the default or breach within 5 (five) Business Days after having received a written notice to do so,</li>
            <li>26.1.2. Resolves to begin business rescue proceedings as contemplated in chapter 6 of the Companies' Act 71 of 2008,</li>
            <li>26.1.3. Is placed in provisional or final liquidation or sequestration, or judicial management,</li>
            <li>26.1.4. Enters into any compromise arrangements with its creditors,</li>
            <li>26.1.5. Fails to satisfy a judgment taken against it within ten (10) Business Days, or</li>
            <li>26.1.6. Falls under the controlling interest or ownership of a competitor of the other Party (for the purpose of this clause, the Party which makes this allegation will carry the burden to prove it),</li>
          </ul>
          <p>the other Party will be entitled either:</p>
          <ul className="list-disc pl-8 space-y-2">
            <li>26.1.7. To hold the Party in breach of the Agreement; or</li>
            <li>26.1.8. To cancel the Agreement.</li>
          </ul>
          <p>26.2. The provisions of this clause will not affect the rights of either Party to claim damages in respect of a breach of any of the provisions of this Agreement.</p>
        </div>
      )
    },
    {
      id: 'notices',
      title: 'Notices',
      content: (
        <div className="space-y-4 text-gray-600">
          <p>27.1. The Parties choose their addresses where they will accept service of any notices/documents for all purposes arising from this Agreement (domicilium citandi et executandi):</p>
          <ul className="list-disc pl-8 space-y-2">
            <li>27.1.1. In the case of Wondernet Pty Ltd, as set out in clause 1.1 of this document, and</li>
            <li>27.1.2. In the case of the Customer, the addresses set out in the most recent Service Order entered into between the Parties.</li>
          </ul>
          <p>27.2. Either Party may vary its given postal address or other contact details by notifying the other Party in writing. Postal addresses must be located within the Republic of South Africa.</p>
          <p>27.3. Any notice given in terms of this Agreement must be in writing and any notice given by any Party to another ("the addressee") which:</p>
          <ul className="list-disc pl-8 space-y-2">
            <li>27.3.1. Is delivered by hand will be deemed to have been received by the addressee on the date of delivery; or</li>
            <li>27.3.2. If sent by fax during Business Hours, upon production of a satisfactory transmission report by the fax machine which sent the fax and if outside such Business Hours then at the beginning of the next Business Day; or</li>
            <li>27.3.3. Is transmitted by email will be deemed to have been received upon confirmation of receipt (not automated receipt) thereof by the addressee; or</li>
            <li>27.3.4. Is posted by pre-paid registered post from an address within the Republic of South Africa to the addressee at its chosen postal address will be deemed to have been received by the addressee on the seventh (7th) day after the date of posting.</li>
          </ul>
          <p>27.4. Despite the above:</p>
          <ul className="list-disc pl-8 space-y-2">
            <li>27.4.1. Any notice that Wondernet Pty Ltd sends by email to an email account hosted on the Wondernet Pty Ltd System by the Customer will be deemed to have been received by the Customer on the date of transmission; and</li>
            <li>27.4.2. If a written notice or communication is actually received by one of the Parties from the other, this will be adequate written notice or communication to that Party.</li>
          </ul>
        </div>
      )
    },
    {
      id: 'disputes',
      title: 'Disputes',
      content: (
        <div className="space-y-4 text-gray-600">
          <p>28.1. In the event of any dispute arising between the Parties regarding this Agreement or any Service, the Parties will act in good faith to attempt to settle the dispute through discussions between the relevant representatives of the Parties within 30 (thirty) days of a Party giving the other Party notice of the issue in dispute. The Parties will follow any dispute or complaints resolution process that Wondernet Pty Ltd may have in place.</p>
          <p>28.2. Any dispute which cannot be resolved by the Parties within the 30 (thirty) days period, as provided in this clause 28, will be resolved by arbitration in the English language by a single arbitrator appointed by the Arbitration Foundation of South Africa and in accordance with the Rules of the Arbitration Foundation of South Africa.</p>
          <p>28.3. Notwithstanding the provisions of this clause 28, either Party will have the right to seek relief by way of interim relief from any court of competent jurisdiction.</p>
          <p>28.4. Pending final settlement or determination of a dispute, the Parties will continue to perform their subsisting obligations hereunder.</p>
          <p>28.5. Notwithstanding the above, the Customer consents to the jurisdiction of the Magistrate's Court in respect of any action initiated for the recovery of overdue payments, notwithstanding that the amount summonsed for exceeds such jurisdiction, the decision on which Court to proceed being in the sole discretion of Wondernet Pty Ltd.</p>
          <p>28.6. Nothing in this clause 28 must be interpreted so as to restrict the Customer's right to approach the tribunal of its choice in terms of the CPA, if it is applicable.</p>
          <p>28.7. This clause is separate from the rest of the Agreement and will remain effective between the parties if this Agreement is terminated.</p>
        </div>
      )
    },
    {
      id: 'force-majeure',
      title: 'Force Majeure',
      content: (
        <div className="space-y-4 text-gray-600">
          <p>29.1. Neither Party will be liable for any delay or failure in performing any obligation under this Agreement due to any cause beyond its reasonable control, including without limitation: industrial action, sabotage, terrorism, civil commotion, riot, war, fire, explosion, storm, flood, or other natural physical disaster, any act or policy of any state or government or other authority having jurisdiction over either Party, sanctions, boycott or embargo, termination or suspension of upstream service.</p>
          <p>29.2. If a delay or failure referred to in clause 29.1 occurs, this Agreement will be suspended for as long as the cause of the delay or failure lasts. If the suspension is longer than three months, either Party may terminate this Agreement by written notice to the other.</p>
        </div>
      )
    },
    {
      id: 'interpretation',
      title: 'Interpretation',
      content: (
        <div className="space-y-4 text-gray-600">
          <p>30.1. This Agreement will be governed by and construed in accordance with the law of the Republic of South Africa.</p>
          <p>30.2. In this Agreement, unless the context requires otherwise: – words importing any one gender will include the other gender; the singular will include the plural and vice versa; a reference to natural persons will include created entities (corporate or unincorporate) and vice versa.</p>
          <p>30.3. Words and expressions defined in any clause will, for the purposes of that clause, bear the meanings assigned to such words and expressions in such clause.</p>
          <p>30.4. If any provision is a substantive provision conferring rights or imposing obligations on any Party, notwithstanding that it is only in a definitions clause, effect will be given to it as if it were a substantive provision in the body of the agreement.</p>
          <p>30.5. Clause headings have been inserted for convenience only and will not be used for nor assist or affect its interpretation; where a clause number is cited, it will be deemed to include reference to all subclauses of that numbered clause.</p>
          <p>30.6. The rule of construction that an agreement will be interpreted against the Party responsible for its drafting or preparation will not apply.</p>
        </div>
      )
    },
    {
      id: 'general',
      title: 'General',
      content: (
        <div className="space-y-4 text-gray-600">
          <p>31.1. This Agreement is the whole of the agreement between the parties, and no document or statement not mentioned above will form part of it. Only a written variation, waiver, or cancellation agreed to and signed by both parties will be of any effect.</p>
          <p>31.2. If one party chooses not to enforce any part of this Agreement, that does not mean that the party cannot enforce that part at a later time. If any part of the Agreement is found to be unenforceable, the rest will still be enforceable.</p>
          <p>31.3. The signatories hereto acting in representative capacities warrant that they are authorized to act in such capacities, and accept personal liability under this Agreement should they prove not to be so authorized.</p>
          <p>31.4. In the event that any part of this Agreement is found to be partially or fully unenforceable for any reason, this will not affect the application or enforceability of the remainder of this Agreement.</p>
        </div>
      )
    },
    {
      id: 'glossary',
      title: 'Glossary',
      content: (
        <div className="space-y-4 text-gray-600">
          <p className="font-semibold">The terms listed below will have the following meanings in this Agreement:</p>
          <div className="space-y-2 text-sm">
            <p>32.1. "Acceptable Use Policy" means the document with that heading available at the Wondernet Pty Ltd Website, as amended from time to time or as found in this document</p>
            <p>32.2. "Affiliate" means, in relation to a Party, the Party's holding company, its subsidiaries, the subsidiaries of its holding company, and any other companies which, directly or indirectly, is controlled by the Party, controls the Party, or is under common control with the Party.</p>
            <p>32.3. "Agreement" means these Standard Terms, as well as the relevant Service Order(s), Service Terms, and any schedules or annexures relating to them or to this document, which all form part of the Agreement.</p>
            <p>32.4. "Business Day" means any day other than a Saturday, a Sunday, or a public holiday in the Republic of South Africa.</p>
            <p>32.5. "Business Hour" means a period of 60 minutes between the hours of 08h00 and 17h00 South African Time, on a Business Day.</p>
            <p>32.6. "Client" means a person that is a client of the Customer in that such person has entered into a business arrangement with the Customer enabling it to access the Services.</p>
            <p>32.7. "CPA" means the Consumer Protection Act No. 68 of 2008.</p>
            <p>32.8. "Data" means electronic representations of information in any form.</p>
            <p>32.9. "Equipment" means any equipment supplied to the Customer by Wondernet Pty Ltd in terms of this Agreement.</p>
            <p>32.10. "Fees" means the fees and charges due to Wondernet Pty Ltd by the Customer in respect of Goods or Services provided.</p>
            <p>32.11. "Good" means any and all goods to be provided by Wondernet Pty Ltd to the Customer in terms of this Agreement.</p>
            <p>32.12. "Party" means either of Wondernet Pty Ltd or the Customer and "Parties" means both of them collectively.</p>
            <p>32.13. "Personnel" means any director, employee, agent, consultant, contractor, or other representative of a Party.</p>
            <p>32.14. "RICA" means the Regulation of Interception of Communication and Provision of Communication-related Information Act 70 of 2003.</p>
            <p>32.15. "Service" means a service provided by Wondernet Pty Ltd to the Customer in terms of this Agreement.</p>
            <p>32.16. "Service Level Agreement" means a document with that heading defining levels of service to be met by Wondernet Pty Ltd under the Agreement.</p>
            <p>32.17. "Service Order" means a goods, license, services, and/or work order agreed to in writing by both the Parties.</p>
            <p>32.18. "Service Terms" means a document describing the terms on which Wondernet Pty Ltd will provide a particular Good or Service.</p>
            <p>32.19. "Standard Terms" or "Wondernet Pty Ltd Standard Terms" means this document.</p>
            <p>32.20. "Software" means any computer program (whether source- or object code), as well as any database structure or content.</p>
            <p>32.21. "Supplier" means a supplier of goods and/or services to Wondernet Pty Ltd.</p>
            <p>32.22. "Time and Materials Rate" means Wondernet Pty Ltd's standard time and materials fees and charges applicable from time to time.</p>
          </div>
        </div>
      )
    }
  ];

  return <LegalPageLayout title="Terms and Conditions" sections={sections} />;
};

export default TermsAndConditions;