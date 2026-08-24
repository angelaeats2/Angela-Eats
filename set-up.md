Angela's Eats Order System — Installation
This package adds a direct website order intake system and a private order dashboard.
Files
menu.html — public menu + website order form
orders.html — private order dashboard
ae-config.js — Supabase browser configuration
angela-eats-orders.sql — database, RLS, secure submit RPC, Realtime
SETUP.md — this file
Installation sequence
Create or choose a Supabase project for Angela's Eats.
In Supabase SQL Editor, run the entire angela-eats-orders.sql file.
In Supabase Authentication → Users, create Angela's admin account.
Run the final administrator allowlist statement shown at the bottom of the SQL file.
In Supabase Project Settings → API, copy:
Project URL
anon/public key
Put those two values in ae-config.js.
Upload menu.html, orders.html, and ae-config.js to the same website directory.
Visit https://angela-eats.com/orders.html and sign in with Angela's admin account.
Place a small test order from menu.html.
Confirm the order appears in the dashboard and test status changes.
Security rules
The anon key belongs in browser code.
The service_role key must NEVER be placed in any website file.
Public visitors cannot read Angela's orders.
Public visitors submit through the ae_submit_order RPC only.
Prices are re-read from the database during submission, so changing a browser-side price does not change the official order price.
Dashboard access requires both a valid Supabase login and membership in ae_admins.
Current order workflow
NEW → CONFIRMED → PREPARING → READY → COMPLETED
CANCELLED is available for cancelled orders.
Important scope note
The website dashboard receives orders submitted through the new website order form.
The existing "Text Angela" button still sends to Angela's phone, and "Email Pre-Order" still sends to Angela's email account. Those external SMS/email conversations are not automatically imported into the dashboard in Version 1.0. That would require a messaging/email provider integration. 
