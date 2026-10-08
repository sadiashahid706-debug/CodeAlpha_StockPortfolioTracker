stock_prices = {
    "AAPL": 180,
    "TSLA": 250,
    "AMZN": 190,
    "MSFT": 420,
    "GOOGL": 160
}

portfolio = []
total_investment = 0

print("===== Stock Portfolio Tracker =====")

while True:
    stock = input("\nEnter stock symbol (or 'done' to finish): ").upper()

    if stock == "DONE":
        break

    if stock not in stock_prices:
        print("Stock not found. Please choose from:")
        print("AAPL, TSLA, AMZN, MSFT, GOOGL")
        continue

    quantity = int(input("Enter quantity: "))

    price = stock_prices[stock]
    investment = price * quantity

    portfolio.append({
        "stock": stock,
        "quantity": quantity,
        "price": price,
        "investment": investment
    })

    total_investment += investment

    print(f"{stock} added successfully.")
    print(f"Investment: ${investment}")

print("\n===== Your Portfolio =====")

for item in portfolio:
    print(
        f"{item['stock']} | "
        f"Quantity: {item['quantity']} | "
        f"Price: ${item['price']} | "
        f"Investment: ${item['investment']}"
    )

print(f"\nTotal Investment: ${total_investment}")
print("Thank you for using Stock Portfolio Tracker!")