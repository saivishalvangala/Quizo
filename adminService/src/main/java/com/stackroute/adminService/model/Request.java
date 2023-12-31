package com.stackroute.adminService.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document
@AllArgsConstructor
@NoArgsConstructor
public class Request {
  @Id
  private String id;
  private String message;
  private String status;

  public void setStatus(String status) {
    this.status = status;
  }
}
