package com.crm.crm.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Contact {

    private @Id @GeneratedValue Long id;
    private String firstName;
    private String lastName;
    private String email;

    private Contact() {}

    public Contact(String firstName, String lastName, String email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
}
