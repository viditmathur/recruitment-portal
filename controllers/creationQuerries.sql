create table jobDetails (
    jobId integer,
    role varchar (20),
    experience varchar (20),
    skills varchar (50),
    organisation varchar (30)
);


create table jobSeekerMapping (
    jobId integer,
    seekerId integer
);

create table user (
    email varchar (20),
    role varchar (10),
    password varchar(50)
);


create table seeker (
    id integer,
    email varchar (20),
    name varchar (20),
    skills varchar(50),
    contact varchar(10),
    currentOrganisation varchar(30),
    totalExperience varchar(10)
);


create table recruiter (
    id integer,
    email varchar (20),
    name varchar (20),
    contact varchar(10),
    currentOrganisation varchar(30)
);

create table recruiterJobMapping (
    jobId integer,
    recruiterId integer
);

