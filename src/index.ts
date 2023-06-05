import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import { HttpsError } from "firebase-functions/v1/https";

admin.initializeApp();

const db = admin.firestore();

export const createUser = functions.https.onCall(
  async (data: { email: string; password: string }) => {
    try {
      const { email, password } = data;

      const userRecord = await admin.auth().createUser({
        email,
        password,
      });

      await db.collection("users").doc(userRecord.uid).set({
        email: userRecord.email,
        tasks: [],
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
      });

      return { id: userRecord.uid };
    } catch (error: unknown) {
      throw new HttpsError("internal", (error as Error).message);
    }
  }
);

export const loginUser = functions.https.onCall(async (data) => {
  try {
    const { token } = data;

    const decodedToken = await admin.auth().verifyIdToken(token);
    const uid = decodedToken.uid;

    // Obtener los datos del usuario desde Firestore
    const userDoc = await db.collection("users").doc(uid).get();
    const userData = userDoc.data();

    // Realizar operaciones adicionales con los datos del usuario
    // Por ejemplo, obtener el nombre y el correo electrónico
    const name = userData?.name;
    const email = userData?.email;

    // Realizar otras operaciones necesarias con los datos del usuario

    return { uid, name, email };
  } catch (error: unknown) {
    throw new HttpsError("internal", (error as Error).message);
  }
});

export const addTask = functions.https.onCall(
  async (
    data: { uid: string; task: string },
    context: functions.https.CallableContext
  ) => {
    try {
      const { uid, task } = data;

      // Verificar permisos de usuario
      if (!context.auth) {
        throw new functions.https.HttpsError(
          "unauthenticated",
          "Usuario no autenticado."
        );
      }

      const taskRef = await db
        .collection("users")
        .doc(uid)
        .collection("tasks")
        .add({
          task,
          completed: false,
          createdAt: admin.firestore.FieldValue.serverTimestamp(),
        });

      return { taskId: taskRef.id };
    } catch (error: unknown) {
      throw new functions.https.HttpsError(
        "internal",
        (error as Error).message
      );
    }
  }
);

export const updateTask = functions.https.onCall(async (data, context) => {
  try {
    const { uid, taskId, task, completed } = data;

    // Verificar permisos de usuario
    if (!context.auth) {
      throw new HttpsError("unauthenticated", "Usuario no autenticado.");
    }

    await db
      .collection("users")
      .doc(uid)
      .collection("tasks")
      .doc(taskId)
      .update({
        task,
        completed,
      });

    return { success: true };
  } catch (error: unknown) {
    throw new HttpsError("internal", (error as Error).message);
  }
});

export const deleteTask = functions.https.onCall(async (data, context) => {
  try {
    const { uid, taskId } = data;

    // Verificar permisos de usuario
    if (!context.auth) {
      throw new HttpsError("unauthenticated", "Usuario no autenticado.");
    }

    await db
      .collection("users")
      .doc(uid)
      .collection("tasks")
      .doc(taskId)
      .delete();

    return { success: true };
  } catch (error: unknown) {
    throw new HttpsError("internal", (error as Error).message);
  }
});

export const markTaskCompleted = functions.https.onCall(
  async (data, context) => {
    try {
      const { uid, taskId, completed } = data;

      // Verificar permisos de usuario
      if (!context.auth) {
        throw new HttpsError("unauthenticated", "Usuario no autenticado.");
      }

      await db
        .collection("users")
        .doc(uid)
        .collection("tasks")
        .doc(taskId)
        .update({
          completed,
        });

      return { success: true };
    } catch (error: unknown) {
      throw new HttpsError("internal", (error as Error).message);
    }
  }
);

export const createTasksIndex = functions.firestore
  .document("users/{userId}/tasks/{taskId}")
  .onCreate(async (snapshot) => {
    try {
      const taskId = snapshot.ref.parent.parent?.id;

      if (taskId) {
        await db
          .collection("users")
          .doc(taskId)
          .collection("tasks")
          .doc(taskId)
          .update({
            dueDate: admin.firestore.FieldValue.serverTimestamp(),
            id: taskId,
          });
      } else {
        console.error("El ID de tarea es nulo o no está definido.");
      }
    } catch (error: unknown) {
      console.error("Error creating tasks index:", (error as Error).message);
    }
  });

export const createUserFunction = functions.https.onCall(async (data) => {
  try {
    const { email, password } = data;

    const userRecord = await admin.auth().createUser({
      email,
      password,
    });

    await db.collection("users").doc(userRecord.uid).set({
      email: userRecord.email,
      tasks: [],
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    return { id: userRecord.uid };
  } catch (error: unknown) {
    throw new HttpsError("internal", (error as Error).message);
  }
});
