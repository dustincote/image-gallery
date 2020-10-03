CREATE TABLE "images" (
    id SERIAL PRIMARY KEY,
    "path" varchar(300),
    "description" varchar(300),
    "likes" integer DEFAULT 0,
);

INSERT INTO "images" ("path", "description") 
Values('./images/goat_small.jpg','Photo of a goat taken at Glacier National Park.'),
('./images/bulls.jpeg','Bulls in the Pasture.'),
('./images/combine.jpeg','Combine and Grain Cart.'),
('./images/kids.JPG','Emily and Jacie.'),
('./images/stuck.jpeg','Stuck.....My Bad!!');








