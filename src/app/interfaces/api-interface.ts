export interface loginResponse {
    non_field_errors: string[];
    ok:               boolean;
    username:         string[];
    password:         string[];
    user:             string;
    email:            string;
    first_name:       string;
    last_name:        string;
    token:            string;
}
export interface getUserResponse {
    ok:               boolean;
    username:         string;
    email:            string;
    first_name:       string;
    last_name:        string;
}
export interface changePasswordResponse {
    ok:               boolean;
    oldP:         string[];
    newP:         string[];
}

export interface categoryResponse {
    categories: Category[];
    ok:         boolean;
}

export interface Category {
    id:   number;
    name: string;
}

export interface trailersResponse {
    trailers: Trailer[];
    context:  Context;
    ok:       boolean;
}

export interface Context {
    category:     string,
    title:        string,
    from:         string,
    to:           string,
    num_pages:    number;
    page:         number;
    has_previous: boolean;
    has_next:     boolean;
}

export interface Trailer {
    id:    number;
    title: string;
    image: string;
}

export interface trailerDetailsResonse {
    trailer: trailerDetails;
    ok:      boolean;
}

export interface trailerDetails {
    id:           number;
    category:     Category[];
    title:        string;
    release_date: Date;
    description:  string;
    cast:         string;
    image:        string;
    trailerUrl:   string;
}