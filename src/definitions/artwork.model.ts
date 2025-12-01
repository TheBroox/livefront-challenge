export interface Artwork {
    // IDs, title and field's ending in "_display" are guaranteed to never 
    // be empty when coming from AIC. Any other fields have the potential
    // to be either `null` or and empty string.
    artist_display?: string,        // Artist or country of origin if known, includes birth and death years if known
    artist_title: string,           // Artist name if known
    date_display?: string,          // Start and end year of artwork if known
    id: number,                     // ID of the artwork in the CIA's database
    image_id: number | string,      // Alphanumeric that is needed to request images from IAC's API
    medium_display?: string,        // List of artwork's mediums
    title: string                   // Title of the artwork if known
};