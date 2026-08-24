/*
  ============================================================================
  ANGELA'S EATS
  SUPABASE PUBLIC CLIENT CONFIGURATION
  ============================================================================

  Browser-safe Supabase connection.

  IMPORTANT:
  Never place:
    - sb_secret_...
    - service_role
  inside this file.
  ============================================================================
*/

window.ANGELAS_EATS_CONFIG = Object.freeze({

  supabaseUrl:
    "https://oyjmpbuxvfxusmbouldi.supabase.co",

  /*
    This property remains named "supabaseAnonKey"
    because menu.html and orders.html currently reference that name.

    The actual value is the modern Supabase Publishable key.
  */

  supabaseAnonKey:
    "sb_publishable_rwTE4QRlQkzr0R0f5t5ylA_a9zuj0eE",

  /*
    Angela's Eats event:
    Saturday, August 29, 2026
    Noon
    Central Daylight Time
  */

  pickupAt:
    "2026-08-29T12:00:00-05:00"

}); 
