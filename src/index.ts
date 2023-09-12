export class Item {
    name: string;
    sellIn: number;
    quality: number;
  
    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
        }
    }
  
  export class GildedRose {
    items: Array<Item>;
  
    constructor(items = [] as Array<Item>) {
        this.items = items;
    }
    
    updateQuality() {
        this.items.forEach(item => {
			// Logs for the golden master
            // console.log("Item Name : " + item.name);
            // console.log("SellIn : " + item.sellIn);
            // console.log("Quality : " + item.quality);
            if (item.name !== 'Sulfuras, Hand of Ragnaros') {
                item.sellIn -= 1;
        
                if (item.name === 'Aged Brie') {
                    this.updateAgedBrieQuality(item);
                } else if (item.name.startsWith('Backstage')) {
                    this.updateBackstagePassQuality(item);
                } else if (item.name.startsWith('Conjured')) {
                    this.updateConjuredItemQuality(item);
                } else {
                    this.updateNormalItemQuality(item);
                }
            }
            // Logs for the golden master
            // console.log("Updated SellIn : " + item.sellIn);
            // console.log("Updated Quality : " + item.quality);
        });
        return this.items;
    }
  
    private updateAgedBrieQuality(item: Item) {
        if (item.quality < 50) {
            item.quality += 1;		// Aged brie's quality gets higher with time.
        }
        if (item.sellIn < 0 && item.quality < 50) {
            item.quality += 1;		// Aged brie's quality rises by 2 instead of 1 when the sellIn is negative. Since we've already added 1, we just add 1 again. We will use this same method in other functions.
        }
    }
  
    private updateBackstagePassQuality(item: Item) {
        if (item.quality < 50) {
            item.quality += 1;
            // sellIn has already been reduced by one, so we check whether it's (strictly) below 10 & 5 instead of 11 & 6.
            if (item.sellIn < 10 && item.quality < 50) {
                item.quality += 1;		// At this point, the quality has been risen by two.
            }
            if (item.sellIn < 5 && item.quality < 50) {
                item.quality += 1;		// At this point, the quality has been risen by three.
            }
        }
        if (item.sellIn < 0) {
            item.quality = 0;
        }
    }
  
    private updateConjuredItemQuality(item: Item) {
        if (item.quality > 0) {
            item.quality -= 2;
        }
        if (item.sellIn < 0 && item.quality > 0) {
            item.quality -= 2;		// At this point, the quality has fallen by four.
        }
    }
  
    private updateNormalItemQuality(item: Item) {
        if (item.quality > 0) {
            item.quality -= 1;
        }
        if (item.sellIn < 0 && item.quality > 0) {
            item.quality -= 1;		// At this point, the quality has fallen by two.
        }
    }
  }