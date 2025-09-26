// AccountListController.cls
// API Version: 63.0

public with sharing class AccountListController {
  @AuraEnabled(cacheable=true)
  public static List<Account> getAccounts(Integer limitSize) {
    List<Account> accounts = [
      SELECT Id, Name, Phone
      FROM Account
      LIMIT :(limitSize ?? 10)
    ];
    // Enforce FLS
    accounts = (List<Account>) Security.stripInaccessible(
        AccessType.READABLE,
        accounts
      )
      .getRecords();
    return accounts;
  }
}
