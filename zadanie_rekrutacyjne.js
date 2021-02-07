// Aby uruchomić test należy wpisać w terminalu komendę: testcafe chrome zadanie_rekrutacyjne.js

import { Selector } from 'testcafe';


fixture `Test`
    .page `https://secure.axainsurance.com/Sales/PersonalLines/AxaDirect/Axa/Travel/Standard/Desktop/Quote/Entry`;

    test('Zadanie testowe', async t => {
        
        await t
        // Your trip details
        .click('#select-single-trip')
        .click(Selector('button').find('span').withExactText('Today'))
        .click(Selector('button').find('span').withExactText('(3 Nights)'))
        .click('#select-one-country')
        .click(Selector('button').find('span').withExactText('Spain'))
        .click('#AreMultipleTripsPlanned_0')

        // Policyholder details
        .click('#Travellers_Traveller1ViewModel_Traveller1TitleId_1')
        .typeText('#Travellers_Traveller1ViewModel_Traveller1FirstName', 'Jan')
        .typeText('#Travellers_Traveller1ViewModel_Traveller1LastName','Nowak')
        .typeText('#Traveller1_DateOfBirthDay','01')
        .typeText('#Traveller1_DateOfBirthMonth','01')
        .typeText('#Traveller1_DateOfBirthYear','1985')
        .typeText('#Travellers_EmailAddress','mail@test.pl')
        .typeText('#HouseNumberOrName','44')
        .typeText('#Postcode','KT111HY')
        .click(Selector('a').find('span').withExactText('Find address'))

        // Three buttons
        .click('#IsAwaitingMedicalDiagnosis_0')
        .click('#HasTravellerBeenPrescribedMedicalTreatmentEver_0')
        .click('#HasTravellerBeenPrescribedMedicalTreatmentLastYear_0')

        // Get quote now
        .click('#submit-travel-details')
        
        //
        // Second page
        //

        //Choose the cover that’s right for you
        .click('#select-travel-smart')

        // Next buttons
        .click('#no-cruise-cover')
        .click('#no-winter-sports')
        .click('#no-sports-activities')
        .click('#no-golf-cover')

        // Proceed to summary
        .click('#submit-your-details');

        //
        // Third page
        //

        const priceAsString = await Selector('div.content-left').find('p').withText('£').innerText;
        

        await t.expect(parseFloat(priceAsString.replace('£', ''))).lt(1000, 'Cena jest większa niż 1000');

    });