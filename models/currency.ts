class Currency {
    id: Number
    name: string
    slug: string
    rank: Number
    is_active: Number
    first_historical_data: Date
    last_historical_data: Date
    normalized_market_cap: any
    normalized_change: any
    symbol: any
    price: Number
    volume_24h: Number
    percent_change_1h: Number
    percent_change_24h: Number
    percent_change_7d: Number
    percent_change_30d: Number
    percent_change_60d: Number
    percent_change_90d: Number
    market_cap: Number
    last_updated: Date
    normalized_price: any
    tags: Array<string>
    public Currency(
        Id: Number,
        Name: string,
        Slug: string,
        Rank: Number,
        Is_Active: Number,
        First_Historical_Data: Date,
        Last_Historical_Data: Date,
        Normalized_Market_Cap: any,
        Normalized_Change: any,
        Symbol: any,
        Price: Number,
        Volume_24h: Number,
        Percent_Change_1h: Number,
        Percent_Change_24h: Number,
        Percent_Change_7d: Number,
        Percent_Change_30d: Number,
        Percent_Change_60d: Number,
        Percent_Change_90d: Number,
        Market_Cap: Number,
        Last_Updated: string,
        Normalized_Price: any,
        Tags: Array<string>
    ) {
        this.id = Id;
        this.name = Name;
        this.slug = Slug;
        this.rank = Rank;
        this.is_active = Is_Active
        this.first_historical_data = new Date(First_Historical_Data);
        this.last_historical_data = new Date(Last_Historical_Data);
        this.normalized_market_cap = Normalized_Market_Cap;
        this.normalized_change = Normalized_Change;
        this.symbol = Symbol;
        this.price = Price;
        this.volume_24h = Volume_24h;
        this.percent_change_1h = Percent_Change_1h
        this.percent_change_24h = Percent_Change_24h
        this.percent_change_7d = Percent_Change_7d
        this.percent_change_30d = Percent_Change_30d;
        this.percent_change_60d = Percent_Change_60d;
        this.percent_change_90d = Percent_Change_90d
        this.market_cap = Market_Cap;
        this.last_updated = new Date(Last_Updated);
        this.normalized_price = Normalized_Price;
        this.tags = Tags;
    }

}
export default Currency;