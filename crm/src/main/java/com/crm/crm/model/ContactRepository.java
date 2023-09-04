package com.crm.crm.model;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface ContactRepository extends CrudRepository<Contact, Long> {
}
