import runGoldenMaster from "jest-golden-master";
import { Item ,GildedRose } from ".";

test('Scenario 1 : Mise à jour de Sulfuras (aucune modification)', async () => {
    runGoldenMaster(async () => {
        // GIVEN
        const items = [new Item('Sulfuras, Hand of Ragnaros', 0, 80)];
        const gildedRose = new GildedRose(items);

        // WHEN
        gildedRose.updateQuality();

        // THEN
        expect(items[0].sellIn).toEqual(0);
        expect(items[0].quality).toEqual(80);
    });
});

test("Scenario 2 : Mise à jour d'un élément normal", async () => {
    runGoldenMaster(async () => {
        // GIVEN
        const items = [new Item('Normal Item', 10, 20)];
        const gildedRose = new GildedRose(items);

        // WHEN
        gildedRose.updateQuality();

        // THEN
        expect(items[0].sellIn).toEqual(9);
        expect(items[0].quality).toEqual(19);
    });
});

test("Scenario 3 : Mise à jour d'un élément normal avec une qualité minimale", async () => {
	runGoldenMaster(async () => {
	    // GIVEN
	    const items = [new Item('Normal Item', 10, 0)];
	    const gildedRose = new GildedRose(items);
    
	    // WHEN
	    gildedRose.updateQuality();
    
	    // THEN
	    expect(items[0].sellIn).toEqual(9);
	    expect(items[0].quality).toEqual(0);
	});
});
    

test("Scenario 4 : Mise à jour d'un élément normal avec un sellIn négatif", async () => {
	runGoldenMaster(async () => {
	    // GIVEN
	    const items = [new Item('Normal Item', 0, 30)];
	    const gildedRose = new GildedRose(items);
    
	    // WHEN
	    gildedRose.updateQuality();
    
	    // THEN
	    expect(items[0].sellIn).toEqual(-1);
	    expect(items[0].quality).toEqual(28); // La qualité diminue deux fois plus vite.
	});
});
    
test("Scenario 5 : Mise à jour d'Aged Brie", async () => {
    runGoldenMaster(async () => {
        // GIVEN
        const items = [new Item('Aged Brie', 5, 30)];
        const gildedRose = new GildedRose(items);

        // WHEN
        gildedRose.updateQuality();

        // THEN
        expect(items[0].sellIn).toEqual(4);
        expect(items[0].quality).toEqual(31);
    });
});

test("Scenario 6 : Mise à jour d'Aged Brie avec une qualité maximale", async () => {
    runGoldenMaster(async () => {
        // GIVEN
        const items = [new Item('Aged Brie', 10, 50)];
        const gildedRose = new GildedRose(items);

        // WHEN
        gildedRose.updateQuality();

        // THEN
        expect(items[0].sellIn).toEqual(9);
        expect(items[0].quality).toEqual(50);
    });
});

test("Scenario 7 : Mise à jour d'Aged Brie après la date de vente", async () => {
    runGoldenMaster(async () => {
        // GIVEN
        const items = [new Item('Aged Brie', 0, 30)];
        const gildedRose = new GildedRose(items);

        // WHEN
        gildedRose.updateQuality();

        // THEN
        expect(items[0].sellIn).toEqual(-1);
        expect(items[0].quality).toEqual(32);
    });
});

test("Scenario 8 : Mise à jour de Backstage Passes", async () => {
    runGoldenMaster(async () => {
        // GIVEN
        const items = [new Item('Backstage passes to a TAFKAL80ETC concert', 15, 40)];
        const gildedRose = new GildedRose(items);

        // WHEN
        gildedRose.updateQuality();

        // THEN
        expect(items[0].sellIn).toEqual(14);
        expect(items[0].quality).toEqual(41);
    });
});

test("Scenario 9 : Mise à jour de Backstage Passes avec une date de concert proche", async () => {
    runGoldenMaster(async () => {
        // GIVEN
        const items = [new Item('Backstage passes to a TAFKAL80ETC concert', 6, 30)]; // Le concert est dans 6 jours.
        const gildedRose = new GildedRose(items);

        // WHEN
        gildedRose.updateQuality();

        // THEN
        expect(items[0].sellIn).toEqual(5);
        expect(items[0].quality).toEqual(32); // La qualité augmente de 2 lorsque la date du concert est dans moins de 10 jours.
    });
});

test("Scenario 10 : Mise à jour de Backstage Passes avec une date de concert très proche", async () => {
    runGoldenMaster(async () => {
        // GIVEN
        const items = [new Item('Backstage passes to a TAFKAL80ETC concert', 3, 30)]; // Le concert est dans 3 jours.
        const gildedRose = new GildedRose(items);

        // WHEN
        gildedRose.updateQuality();

        // THEN
        expect(items[0].sellIn).toEqual(2);
        expect(items[0].quality).toEqual(33); // La qualité augmente de 3 lorsque la date du concert est dans moins de 5 jours.
    });
});

test("Scenario 11 : Mise à jour de Backstage Passes avec une date de concert dépassée", async () => {
    runGoldenMaster(async () => {
        // GIVEN
        const items = [new Item('Backstage passes to a TAFKAL80ETC concert', 0, 30)]; // Le concert est aujourd'hui ou déjà passé.
        const gildedRose = new GildedRose(items);

        // WHEN
        gildedRose.updateQuality();

        // THEN
        expect(items[0].sellIn).toEqual(-1);
        expect(items[0].quality).toEqual(0); // La qualité tombe à zéro.
    });
});

test("Scenario 12 : Mise à jour de Conjured Item", async () => {
    runGoldenMaster(async () => {
        // GIVEN
        const items = [new Item('Conjured Item', 10, 20)];
        const gildedRose = new GildedRose(items);

        // WHEN
        gildedRose.updateQuality();

        // THEN
        expect(items[0].sellIn).toEqual(9);
        expect(items[0].quality).toEqual(18); // La qualité diminue deux fois plus vite que pour un objet normal.
    });
});

test("Scenario 13 : Mise à jour de Conjured Item avec sellIn négatif", async () => {
    runGoldenMaster(async () => {
        // GIVEN
        const items = [new Item('Conjured Item', 0, 20)];
        const gildedRose = new GildedRose(items);

        // WHEN
        gildedRose.updateQuality();

        // THEN
        expect(items[0].sellIn).toEqual(-1);
        expect(items[0].quality).toEqual(16); // La qualité diminue deux fois plus vite que pour un sellIn >=0, donc ça diminue de 4.
    });
});
