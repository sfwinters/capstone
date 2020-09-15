package com.example.trek.model;

import javax.annotation.Generated;
import javax.persistence.*;

@Entity
@Table(name = "fedships")
public class FedShips {
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String name;

    @Column
    private String registry;

    @Column
    private String fedClass;

    @Column
    private String type;

    @Column
    private String owner;

    @Column
    private String photo;

    @Column
    private String info;

    @Column
    private String fedId;

    public FedShips() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getRegistry() {
        return registry;
    }

    public void setRegistry(String registry) {
        this.registry = registry;
    }

    public String getFedClass() {
        return fedClass;
    }

    public void setFedClass(String fedClass) {
        this.fedClass = fedClass;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getOwner() {
        return owner;
    }

    public void setOwner(String owner) {
        this.owner = owner;
    }

    public String getPhoto() {
        return photo;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }

    public String getInfo() {
        return info;
    }

    public void setInfo(String info) {
        this.info = info;
    }

    public String getFedId() {
        return fedId;
    }

    public void setFedId(String fedId) {
        this.fedId = fedId;
    }
}
