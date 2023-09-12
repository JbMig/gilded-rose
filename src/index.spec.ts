import runGoldenMaster from "jest-golden-master";
import { Item ,GildedRose } from ".";

test('Scenario 1 : Updating of Sulfuras (no modification)', async () => {
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

test("Scenario 2 : Updating of a normal item", async () => {
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

test("Scenario 3 : Updating of a normal item when quality = 0", async () => {
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
    

test("Scenario 4 : Updating of a normal item when sellIn < 0", async () => {
	runGoldenMaster(async () => {
	    // GIVEN
	    const items = [new Item('Normal Item', 0, 30)];
	    const gildedRose = new GildedRose(items);
    
	    // WHEN
	    gildedRose.updateQuality();
    
	    // THEN
	    expect(items[0].sellIn).toEqual(-1);
	    expect(items[0].quality).toEqual(28);
	});
});
    
test("Scenario 5 : Updating of Aged Brie", async () => {
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

test("Scenario 6 : Updating of Aged Brie when quality = 50", async () => {
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

test("Scenario 7 : Updating of Aged Brie when sellIn < 0", async () => {
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

test("Scenario 8 : Updating of Backstage Passes", async () => {
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

test("Scenario 9 : Updating of Backstage Passes when sellIn < 10", async () => {
    runGoldenMaster(async () => {
        // GIVEN
        const items = [new Item('Backstage passes to a TAFKAL80ETC concert', 6, 30)];
        const gildedRose = new GildedRose(items);

        // WHEN
        gildedRose.updateQuality();

        // THEN
        expect(items[0].sellIn).toEqual(5);
        expect(items[0].quality).toEqual(32);
    });
});

test("Scenario 10 : Updating of Backstage Passes when sellIn < 5", async () => {
    runGoldenMaster(async () => {
        // GIVEN
        const items = [new Item('Backstage passes to a TAFKAL80ETC concert', 3, 30)];
        const gildedRose = new GildedRose(items);

        // WHEN
        gildedRose.updateQuality();

        // THEN
        expect(items[0].sellIn).toEqual(2);
        expect(items[0].quality).toEqual(33);
    });
});

test("Scenario 11 : Updating of Backstage Passes when sellIn < 0", async () => {
    runGoldenMaster(async () => {
        // GIVEN
        const items = [new Item('Backstage passes to a TAFKAL80ETC concert', 0, 30)];
        const gildedRose = new GildedRose(items);

        // WHEN
        gildedRose.updateQuality();

        // THEN
        expect(items[0].sellIn).toEqual(-1);
        expect(items[0].quality).toEqual(0);
    });
});

test("Scenario 12 : Updating of Conjured Item", async () => {
    runGoldenMaster(async () => {
        // GIVEN
        const items = [new Item('Conjured Item', 10, 20)];
        const gildedRose = new GildedRose(items);

        // WHEN
        gildedRose.updateQuality();

        // THEN
        expect(items[0].sellIn).toEqual(9);
        expect(items[0].quality).toEqual(18);
    });
});

test("Scenario 13 : Updating of Conjured Item when sellIn < 0", async () => {
    runGoldenMaster(async () => {
        // GIVEN
        const items = [new Item('Conjured Item', 0, 20)];
        const gildedRose = new GildedRose(items);

        // WHEN
        gildedRose.updateQuality();

        // THEN
        expect(items[0].sellIn).toEqual(-1);
        expect(items[0].quality).toEqual(16);
    });
});
