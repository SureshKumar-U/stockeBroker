export interface PlaceOrder {
    quantity: number,
    product: string,
    validity: "DAY"| "IOC",
    price: number,
    tag?: string,
    order_type: "MARKET" | "LIMIT" | "SL" | "SL-M",
    instrument_token: string,
    transaction_type: "BUY" | "SELL",
    disclosed_quantity: number,
    trigger_price: number,
    is_amo: boolean,
    slice?: boolean,
}