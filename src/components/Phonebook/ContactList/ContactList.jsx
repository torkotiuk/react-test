import styles from './ContactList.module.scss';

const ContactList = ({ items, onDeleteContact }) => {
  // const statMen = items.reduce(
  //   (acc, item) => (item.gender === 'male' ? acc + 1 : acc),
  //   0,
  // );
  // const statWomen = items.reduce(
  //   (acc, item) => (item.gender === 'female' ? acc + 1 : acc),
  //   0,
  // );

  return (
    <div>
      <div className={styles.Contact__titleContainer}>
        <h3 className={styles.Contact__titleContainer_item}>ContactList</h3>
        {/* <p className={styles.Contact__titleContainer_item}>
          Found contacts: {items.length}
        </p>
        <p className={styles.Contact__titleContainer_item}>of</p>
        <p className={styles.Contact__titleContainer_item}>{statMen} men &</p>
        <p className={styles.Contact__titleContainer_item}>{statWomen} women</p> */}
      </div>
      {items.map(contact => (
        <li key={contact.id} className={styles.ContactList__item}>
          <p>{contact.name}</p>
          <p>{contact.number}</p>
          <button type="button" onClick={() => onDeleteContact(contact.id)}>
            Delete
          </button>
        </li>
      ))}
    </div>
  );
};

export default ContactList;
