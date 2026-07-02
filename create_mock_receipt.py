from PIL import Image, ImageDraw

# Create a clean white receipt canvas
width, height = 400, 650
image = Image.new('RGB', (width, height), color='white')
draw = ImageDraw.Draw(image)

# Text lines to draw on the receipt
lines = [
    "RELIANCE FRESH",
    "Supermarket Store #4820",
    "Mumbai, MH 400001",
    "----------------------------------",
    "Date: 2026-06-25",
    "Time: 14:32:10",
    "TXN ID: 98127392813",
    "----------------------------------",
    "1x Organic Whole Milk    Rs. 80.00",
    "2x Fresh Brown Eggs     Rs. 120.00",
    "1x Sourdough Bread      Rs. 95.00",
    "1x Salted Butter        Rs. 105.00",
    "----------------------------------",
    "SUBTOTAL                Rs. 400.00",
    "TAX (CGST/SGST 5%)       Rs. 20.00",
    "----------------------------------",
    "TOTAL DUE               Rs. 420.00",
    "----------------------------------",
    "Paid via UPI Reference: 6182739182",
    "Thank you for shopping!",
    "Save paper, go green!"
]

y_text = 40
for line in lines:
    draw.text((30, y_text), line, fill='black')
    y_text += 25

image.save('/home/jairus/Antonius Jairus/Projects/Palindrome/client/public/mock_receipt.png')
print("Successfully generated mock_receipt.png at public/mock_receipt.png")