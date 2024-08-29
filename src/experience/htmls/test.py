import tabula
import pandas as pd

# Define the file path and output CSV path
pdf_path = "C:/Users/wasil/Downloads/TAXMISS2-1359897-20240814153307 (1).pdf"
output_csv_path = "C:/Users/wasil/Downloads/extracted_tables.csv"

# Extract tables from the PDF
tables = tabula.read_pdf(pdf_path, pages='all', multiple_tables=True)

# Check if tables were extracted and save them to CSV
if tables:
    combined_df = pd.concat(tables, ignore_index=True)
    combined_df.to_csv(output_csv_path, index=False)
    print(f"Tables successfully extracted and saved to {output_csv_path}")
else:
    print("No tables found or extraction failed.")
